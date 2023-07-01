import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin : boolean = true;

  handleChangeLogin() {
    this.isLogin = !this.isLogin;
  }
}
