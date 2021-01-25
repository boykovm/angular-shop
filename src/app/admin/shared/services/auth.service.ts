import { Injectable } from '@angular/core';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // private http: HttpClient
  ) { }

  login(user: User) {
    user.isAdmin = true;
    // return this.http.post(`localhost:8080`, user)
  }
}
