import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { TokenService } from '../login/token.service';
import { IUserBestBook, IUserBooks, IUserBooksStatistics } from 'src/interfaces';


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
    return this.http.get<IUserBooks>(this.urlAPI + `user-book/${userId}/wish-to-read`, httpOptions)
  }

  getReadingBooks(userId: number) : Observable<IUserBooks> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
    }
    return this.http.get<IUserBooks>(this.urlAPI + `user-book/${userId}/reading`, httpOptions)
  }


  getReadedBooks(userId: number) : Observable<IUserBooks> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${this.tokenService.getToken()}`})
    }
    return this.http.get<IUserBooks>(this.urlAPI + `user-book/${userId}/readed`, httpOptions)
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
}
