import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { IToken, UserLogin, UserRegister } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlAPI = 'https://localhost:7186/';

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getToken(userLogin : UserLogin): Observable<IToken> {
      const body = JSON.stringify(userLogin);

      return this.http.post<IToken>(this.urlAPI + `user/login`, body, this.httpOptions)
  }

  registerUser(userRegister : UserRegister): Observable<UserRegister> {
    const body = JSON.stringify(userRegister);

    return this.http.post<any>(this.urlAPI + `user/register`, body, this.httpOptions)
  }
}
