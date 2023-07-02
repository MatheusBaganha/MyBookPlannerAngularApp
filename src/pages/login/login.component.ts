import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserLogin, UserRegister } from 'src/interfaces';
import { LoginService } from 'src/services/login/login.service';
import { TokenService } from 'src/services/login/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin : boolean = true;

  username: string = '';
  email : string = '';
  password: string = '';

  error : string = '';

  constructor(private loginService : LoginService, private tokenService : TokenService, private router: Router, private authService: AuthService) { }

  
  ngOnInit() {
  }

  handleChangeLogin() {
    this.isLogin = !this.isLogin;
  }

  handleLogin() {
    this.error = '';
    if(this.email === '' || this.password === '') {
      return;
    }

    const regex = /^\S+@\S+\.\S+$/;

    if(!this.email.match(regex)) {
      this.error = 'Digite um email válido.';
      setTimeout(() => {
        this.error = '';
      }, 6000)
      return;
    }

    const userLogin : UserLogin = {
      email: this.email.toLowerCase(),
      password:  this.password
    }

    this.loginService.getToken(userLogin).subscribe({
      next: (token) => {
          this.tokenService.setToken(token.usertoken);
          console.log(this.email, this.password)
          this.authService.login();
          this.router.navigate(['/perfil']);
      },
      error: (error: HttpErrorResponse) => {
        this.error = "Usuário ou senha inválidos.";
        this.email = '';
        this.password = '';
        console.log(this.error);
        setTimeout(() => {
          this.error = '';
        }, 6000)
      }
    }); 

    console.log(this.tokenService.getTokenDecoded())
    console.log(this.tokenService.getToken())
  }


  handleSignUp() {
    this.error = '';

    if(this.email === '' || this.password === '' || this.username === '') {
      return;
    }

    const userRegister : UserRegister = {
      username: this.username,
      email: this.email.toLowerCase(),
      password: this.password
    }

    this.loginService.registerUser(userRegister).subscribe({
      next: () => {
        this.loginService.getToken({email: userRegister.email, password: userRegister.password}).subscribe({
          next: (token) => {
              this.tokenService.setToken(token.usertoken);
              console.log(token);
              console.log(this.email, this.password)
              this.router.navigate(['/perfil']);
          }});
      },
      error: (error: HttpErrorResponse) => {
        this.error = "Usuário já existente.";
        this.email = '';
        this.username = '';
        this.password = '';
        setTimeout(() => {
          this.error = '';
        }, 6000)
        console.log(this.error);
      }
    });
  }
}
