import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }

  loginUser() {
    //guardamos en el sesionstorage un pseudo token
    sessionStorage.setItem('token', '123456');
    this.router.navigate(['contacts']);
  }
}
