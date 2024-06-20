import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  enableNavbar: boolean = true;
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.userLoginEmitter.subscribe(
      event => this.enableNavbar = event
    );
  }
}
