import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

    //  BehaviorSubject é basicamente um tipo de gerenciador de estado que fica olhando se alguma propriedade mudou 
    //  ou não, e se mudou, ele avisa todos os componentes que dependem dessa propriedade para atualizar.

  constructor() { }

  login() {
    // Após o login bem-sucedido:
    this.isLoggedInSubject.next(true);
  }

  logout() {
    // Após o logout bem-sucedido:
    this.isLoggedInSubject.next(false);
  }
}