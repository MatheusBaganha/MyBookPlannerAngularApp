import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { TokenService } from '../login/token.service';
import { IEditBook, IUserBestBook, IUserBooks, IUserBooksStatistics } from 'src/interfaces';


@Injectable({
  providedIn: 'root'
})
export class userBooksService {
  private urlAPI = 'https://localhost:7186/';

  constructor(private http : HttpClient, private tokenService : TokenService) { }

  getWishToReadBooks(userId: number) : Observable<IUserBooks> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
    }
    return this.http.get<IUserBooks>(this.urlAPI + `user-book/wish-to-read/${userId}`, httpOptions)
  }

  getReadingBooks(userId: number) : Observable<IUserBooks> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
    }
    return this.http.get<IUserBooks>(this.urlAPI + `user-book/reading/${userId}`, httpOptions)
  }


  getReadedBooks(userId: number) : Observable<IUserBooks> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
    }
    return this.http.get<IUserBooks>(this.urlAPI + `user-book/readed/${userId}`, httpOptions)
  }


  getUserStatistics(userId : number) : Observable<IUserBooksStatistics> {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
      }
      return this.http.get<IUserBooksStatistics>(this.urlAPI + `user-book/${userId}/statistics`, httpOptions)
  }

  getUserBestBook(userId : number) : Observable<IUserBestBook> {
    const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
      }
    return this.http.get<IUserBestBook>(this.urlAPI + `user-book/${userId}/best-book`, httpOptions)
  }


  addUserBook(book : IEditBook) : Observable<IEditBook> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})      
    }

    const body = {
      idUser: this.tokenService.getTokenDecoded().unique_name,
      idBook: book.idBook,
      userScore: book.userScore,
      readingStatus: book.readingStatus
    }

      return this.http.post<IEditBook>(this.urlAPI + `user-book/add-book`, body, httpOptions);
    }

    updateUserBook(book : IEditBook) : Observable<IEditBook> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})      
      }
  
      const body = {
        idUser: this.tokenService.getTokenDecoded().unique_name,
        idBook: book.idBook,
        userScore: book.userScore,
        readingStatus: book.readingStatus
      }
  
        return this.http.put<IEditBook>(this.urlAPI + `user-book/update-book`, body, httpOptions);
      }

      
    deleteUserBook(idBook: number) : Observable<IEditBook> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})      
      }
  
      const idUser = this.tokenService.getTokenDecoded().unique_name;
  
        return this.http.delete<IEditBook>(this.urlAPI + `user-book/delete-book/${idUser}/${idBook}`, httpOptions);
      }
}
