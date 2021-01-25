import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../admin.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  form: FormGroup | any;
  submited = false;

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  login(): any {
    this.submited = true;

    const admin: AdminService = {
      username: this.form.value.username,
      password: this.form.value.password
    };

    // this.auth.login(admin).subscribe(() => {
    //   this.form.reset();
    //   this.submited = false;
    //   this.router.navigate(['admin', 'dashboard']);
    // }, () => {
    //   this.submited = false;
    //   }
    // );

    this.router.navigate(['admin', 'dashboard']);
  }

  signup(): any{
    console.log('signup');
    this.router.navigate(['admin', 'signup']);
  }


  ngOnInit(): any {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
