import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {

   constructor(private router: Router) {}
  
    navigateToHome(): void {
      this.router.navigate(['/']);
    }
  
    navigateToProfile(): void {
      this.router.navigate(['/profile']);
    }
    navigateToUserStats(): void {
      this.router.navigate(['/user-stats']);
    }
    navigateToMyGames(): void {
      this.router.navigate(['/game-list']);
    }
    navigateToAddGames(): void {
      this.router.navigate(['/game-form']);
    }
    navigateToDiscover(): void {
      this.router.navigate(['/discover']);
    }
  
    navigateToUserList(): void {
      this.router.navigate(['/user-list']);
    }

    navigateToUserHome(): void {
      this.router.navigate(['/home']);
    }
  
}
