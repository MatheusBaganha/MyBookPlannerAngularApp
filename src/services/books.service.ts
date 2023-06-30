import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { IBook } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private urlAPI = 'https://localhost:7186/';
  constructor(private http : HttpClient) { }

  get(page: number, pageSize: number): Observable<IBook> {
      return this.http.get<IBook>(this.urlAPI + `books?page=${page}&pageSize=${pageSize}`)
  }
}
