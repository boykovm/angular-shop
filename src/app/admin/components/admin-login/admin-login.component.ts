import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  login() {
    console.log('login');
    this.router.navigate(['admin', 'dashboard']);
  }

  signup() {
    console.log('signup');
    this.router.navigate(['admin', 'signup']);
  }

  ngOnInit(): void {
  }
}
