import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  authService = inject(AuthService);

  onSubmit() {
    this.authService.login();
  }
}
