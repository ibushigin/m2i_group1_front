import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/app/environ/env';

@Injectable({
  providedIn: 'root',
})
export class SessionLoginService {
  constructor(private http: HttpClient) {}

  login(email: string, pass: string) {
    const loginData = {
      email: email,
      password: pass,
    };

    return new Observable<boolean>((observer) => {
      this.http.post(env.urlLogin, loginData).subscribe(
        (result) => {
          observer.next(true);
          observer.complete();
        },
        (error) => {
          observer.error(false);
          observer.complete();
        }
      );
    });
  }

  logout() {
    return new Observable<boolean>((observer) => {
      this.http.get(env.urlLogout).subscribe(
        (result) => {
          observer.next(true);
          observer.complete();
        },
        (error) => {
          observer.error(false);
          observer.complete();
        }
      );
    });
  }
}
