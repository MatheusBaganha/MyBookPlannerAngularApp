import { Component, Input, OnInit } from '@angular/core';
import { Book, IBook, IOneBook, UserBooks } from 'src/interfaces';
import { BooksService } from 'src/services/books/books.service';
import { AuthService } from 'src/services/login/auth.service';

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
  isLoggedIn: boolean = false;

  modalIsActive: boolean = false;
  bookInModal : Book | null = null;

  constructor(private bookService : BooksService, private authService : AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  closeModal() {
    this.bookInModal = null;
    this.modalIsActive = false;
  }

  openModal(bookId : number) {
 

    this.modalIsActive = true;
    this.bookService.getBookById(bookId).subscribe({
      next: (book) => {
          this.bookInModal = book.data;
      }
    })
  }
}
