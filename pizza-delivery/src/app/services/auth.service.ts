import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: boolean = false;
  router = new Router();
  userLoginEmitter = new EventEmitter<boolean>();

  login() {
    this.userLoginEmitter.emit(true);
    this.router.navigate(['/']); // redirect user to homepage
  }
}
