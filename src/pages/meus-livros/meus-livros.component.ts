import { Component } from '@angular/core';
import { IUserBooks } from 'src/interfaces';
import { BooksService } from 'src/services/books/books.service';

@Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.scss']
})
export class MeusLivrosComponent {
  constructor(private bookService: BooksService) {
  }
  books! : IUserBooks;
  active = {
    wishToRead: false,
    reading: false,
    readed: true,
  };

  
  getWishToReadBooks() {
    this.active.readed = false
    this.active.reading = false
    this.active.wishToRead = true
  }

  getReadingBooks() {
    this.active.readed = false
    this.active.reading = true
    this.active.wishToRead = false
  }

  getReadedBooks() {
    this.active.readed = true
    this.active.reading = false
    this.active.wishToRead = false
  }
}
