import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ITokenData, UserBestBook, UserBooksStatistics } from 'src/interfaces';
import { AuthService } from 'src/services/login/auth.service';
import { TokenService } from 'src/services/login/token.service';
import { userBooksService } from 'src/services/userBooks/userBooks.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(private tokenService : TokenService, private authService : AuthService,private userBooksService : userBooksService,  private router: Router) {}

  userData : ITokenData | null = this.tokenService.getTokenDecoded();
  bestBook! : UserBestBook | null;
  userStatistics! : UserBooksStatistics | null;
  errors: string = '';

  logout() {
      this.userData = null;
      this.bestBook = null;
      this.userStatistics = null;
      this.errors = '';
      this.tokenService.setToken('');
      this.authService.logout();
      this.router.navigate(['/login']);
  }

  deleteAccount() {

  }

  ngOnInit() {
      this.userBooksService.getUserStatistics(this.userData!.unique_name).subscribe({
        next: (statistics) => {
            this.userStatistics = statistics.data;
            console.log(this.userStatistics)
            console.log(statistics.data)
        },
        error: (error) => {
          console.log('Error retrieving user statistics:', error);
        }
      });

      this.userBooksService.getUserBestBook(this.userData!.unique_name).subscribe({
        next: (bestBook) => {
          this.bestBook = bestBook.data;
          console.log(this.bestBook)
          console.log(bestBook.data)
        },
        error: (error) => {
          console.log('Error retrieving user statistics:', error);
        }
        });
  }
}
