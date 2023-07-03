import { Component, Input, OnInit } from '@angular/core';
import { Book, IBook, IOneBook, UserBooks } from 'src/interfaces';
import { BooksService } from 'src/services/books/books.service';
import { AuthService } from 'src/services/login/auth.service';
import { userBooksService } from 'src/services/userBooks/userBooks.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() books! : IBook | null;
  @Input() userBooks! : UserBooks[] | null;
  @Input() page : number = 0;

  error: string = '';
  sucessfulRequest: string = '';
  isLoggedIn: boolean = false;

  modalIsActive: boolean = false;
  bookInModal : Book | null = null;

  userScore : number | undefined;
  readingStatus : string = 'Selecione';

  constructor(private bookService : BooksService, private userBooksService : userBooksService, private authService : AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  closeModal() {
    this.bookInModal = null;
    this.error = '';
    this.sucessfulRequest = '';
    this.userScore = undefined;
    this.readingStatus = 'Selecione'
    this.modalIsActive = false;
    
  }

  openModal(bookId : number) {
    this.error = '';
    this.sucessfulRequest = '';
    this.modalIsActive = true;
    this.bookService.getBookById(bookId).subscribe({
      next: (book) => {
          this.bookInModal = book.data;
      }
    })
  }

  addBook() {
    this.error = '';

    if(this.userScore === undefined || this.readingStatus === 'Selecione') {
      this.error = "Preencha os campos corretamente."
      return;
    }

    const book = {
      idBook: this.bookInModal!.id,
      readingStatus: this.readingStatus!,
      userScore: this.userScore!
    }
    this.userBooksService.addUserBook(book).subscribe({
      next: () => {
        this.error = '';
        this.sucessfulRequest = "Livro adicionado."
      },
      error: () => {
        this.sucessfulRequest = '';
        this.error = "Você já possuí esse livro em sua conta."
      }
    })
  }

  updateBook() {
    this.error = '';
    
    if(this.userScore === undefined || this.readingStatus === 'Selecione') {
      this.error = "Preencha os campos corretamente."
      return;
    }

    const book = {
      idBook: this.bookInModal!.id,
      readingStatus: this.readingStatus!,
      userScore: this.userScore!
    }

    this.userBooksService.updateUserBook(book).subscribe({
      next: () => {
        this.error = ''
        this.sucessfulRequest = "Livro atualizado."
      },
      error: () => {
        this.sucessfulRequest = '';
        this.error = "Erro ao atualizar o livro."
      }
    })
  }

  deleteBook(idBook: number) {
    this.error = '';
    
    this.userBooksService.deleteUserBook(idBook).subscribe({
      next: () => {
        this.error = ''
        this.sucessfulRequest = "Livro apagado."
      },
      error: () => {
        this.sucessfulRequest = '';
        this.error = "Erro ao apagar o livro."
      }
    })
  }
}


