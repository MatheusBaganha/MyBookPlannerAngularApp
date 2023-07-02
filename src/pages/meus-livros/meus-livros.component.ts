import { Component, OnInit } from '@angular/core';
import { UserBooks } from 'src/interfaces';
import { TokenService } from 'src/services/login/token.service';
import { userBooksService } from 'src/services/userBooks/userBooks.service';

@Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.scss']
})
export class MeusLivrosComponent implements OnInit {
  constructor(private userBookService: userBooksService, private tokenService : TokenService) {
  }
  books! : UserBooks[];
  active = {
    wishToRead: false,
    reading: false,
    readed: true,
  };

  error : string = '';

  ngOnInit() {
      this.getReadedBooks()
  }
  
  getWishToReadBooks() {
    this.error = '';

    this.active.readed = false
    this.active.reading = false
    this.active.wishToRead = true

    this.userBookService.getWishToReadBooks(this.tokenService.getTokenDecoded().unique_name).subscribe({
      next: (userBooks) => {
        this.books = userBooks.data;
      },
      error: () => {
        this.error = "Você não tem livros que deseja ler."
      }
    })
  }

  getReadingBooks() {
    this.error = '';

    this.active.readed = false
    this.active.reading = true
    this.active.wishToRead = false

    this.userBookService.getReadingBooks(this.tokenService.getTokenDecoded().unique_name).subscribe({
      next: (userBooks) => {
        this.books = userBooks.data;
      },
      error: () => {
        this.error = "Você não tem livros que está lendo."
      }
    })
  }

  getReadedBooks() {
    this.error = '';

    this.active.readed = true
    this.active.reading = false
    this.active.wishToRead = false

    this.userBookService.getReadedBooks(this.tokenService.getTokenDecoded().unique_name).subscribe({
      next: (userBooks) => {
        this.books = userBooks.data;
      },
      error: () => {
        this.error = "Você não tem livros lidos."
      }
    })
  }
}
