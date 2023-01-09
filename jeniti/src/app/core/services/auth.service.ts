import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/environ/env';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: UserLogin) {
    return this.http.post(env.urlLogin, credentials);
  }
}
