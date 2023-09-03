import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;
  
    constructor(private router: Router, private userDataService: UserDataService) {}
  
    login() {
      if (this.username.length >= 3 && this.username.length <= 8 && /^\d+$/.test(this.password)) {
        const userData = { username: this.username, password: this.password };
        this.userDataService.setUserData(userData);
        this.router.navigate(['/home']);
      } else {
        console.log('Inicio de sesión fallido');
      }
    }
  }
  