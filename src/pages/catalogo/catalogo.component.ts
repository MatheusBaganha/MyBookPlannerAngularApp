import { Component, Input } from '@angular/core';
import { BooksService } from 'src/services/books.service';

import { IBook } from 'src/interfaces';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  constructor(private bookService: BooksService) {
  }
  books! : IBook;

  getBooks(page = 0, pageSize = 10) {
    this.bookService.get(page, pageSize).subscribe((books) =>  {
      this.books = books;
      console.log(this.books);
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}
