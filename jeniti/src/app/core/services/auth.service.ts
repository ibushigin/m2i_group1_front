import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/app/environ/env';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credential: Credential): Observable<User> {
    return this.http.post<User>(env.urlLogin, credential);
  }

  logout() {
    console.log('logout');
  }
}
