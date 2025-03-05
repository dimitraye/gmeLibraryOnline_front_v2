import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disconnected-user-navbar',
  standalone: true,
  imports: [],
  templateUrl: './disconnected-user-navbar.component.html',
  styleUrl: './disconnected-user-navbar.component.scss'
})
export class DisconnectedUserNavbarComponent {

  constructor(private router: Router) {}

  navigateToHomeApp(): void {
    this.router.navigate(['/']);
  }
  
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
