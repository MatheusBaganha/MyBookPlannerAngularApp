import { Component } from '@angular/core';
import { UserBestBook, UserBooksStatistics } from 'src/interfaces';
import { TokenService } from 'src/services/login/token.service';
import { userBooksService } from 'src/services/userBooks/userBooks.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(private tokenService : TokenService, private userBooksService : userBooksService) {}

  userData = this.tokenService.getTokenDecoded();
  bestBook! : UserBestBook | undefined;
  userStatistics! : UserBooksStatistics | undefined;
  errors: string = '';

  logout() {

  }

  deleteAccount() {

  }

  ngOnInit() {
      this.userBooksService.getUserStatistics(this.userData.unique_name).subscribe({
        next: (statistics) => {
            this.userStatistics = statistics.data;
            console.log(this.userStatistics)
            console.log(statistics.data)
        },
        error: (error) => {
          console.log('Error retrieving user statistics:', error);
        }
      });

      this.userBooksService.getUserBestBook(this.userData.unique_name).subscribe({
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
