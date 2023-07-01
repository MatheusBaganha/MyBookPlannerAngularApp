import { Component, Input } from '@angular/core';
import { BooksService } from 'src/services/books/books.service';

import { IBook } from 'src/interfaces';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {
  constructor(private bookService: BooksService) {
  }
  books! : IBook;
  page : number = 0;
  error : string = '';
  
  getBooks(page = this.page, pageSize = 10) {
    this.error = '';
    this.bookService.get(this.page, 10).subscribe({
      next: (books) => {
          this.books = books;
          console.log(this.books);
      },
      error: (error: HttpErrorResponse) => {
        this.error = "Não existem mais livros."
        this.page = this.page - 1;
        console.log(this.error);
      }
    }); 
  }

  previousPage() {
    if (this.page === 0) {
      return;
    }

    this.page = this.page - 1;
    this.getBooks(this.page, 10);
  }

  nextPage() {
    if(this.error) {
      return;
    }
    
    this.page = this.page + 1;
    this.getBooks(this.page, 10);
  }


  ngOnInit() {
    this.getBooks();
  }
}
