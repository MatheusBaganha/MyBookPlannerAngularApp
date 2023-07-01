import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ITokenData } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private token: string = '';
  private tokenDecoded! : ITokenData;

  constructor() { }

  setToken(token: string) {
    this.token = token;
    this.tokenDecoded = jwtDecode(this.token);
  }

  getToken(): string {
    return this.token;
  }

  getTokenDecoded() {
    return this.tokenDecoded;
  }
}