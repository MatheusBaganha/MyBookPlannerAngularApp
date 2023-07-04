import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/login/auth.service';
import { TokenService } from 'src/services/login/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private tokenService : TokenService, private authService : AuthService, private router : Router) {}


  ngOnInit(): void {
      this.isUserLogged();
  }

  isUserLogged() {
    const tokenStorage = localStorage.getItem('token');

    if(tokenStorage === null || tokenStorage === '') {
      return;
    } else {
      this.tokenService.setToken(tokenStorage);
      this.authService.login();
      this.router.navigate(['/meusLivros']);
    }
  }
}