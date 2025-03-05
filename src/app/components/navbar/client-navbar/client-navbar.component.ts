import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-navbar',
  standalone: true,
  imports: [],
  templateUrl: './client-navbar.component.html',
  styleUrl: './client-navbar.component.scss'
})
export class ClientNavbarComponent {

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

  navigateToUserHome(): void {
    this.router.navigate(['/home']);
  }

}
