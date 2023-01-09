import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { env } from 'src/app/environ/env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(email: string, password: string) {
    const body = { email: email, password: password };

    this.http
      .post<any>(env.urlLogin, body, { observe: 'response' })
      .pipe(
        map((response) => {
          const headers = response.headers;
          const header = response.headers.get('Content-Type');
          console.log(header);
          console.log(response);
          console.log(response.headers.keys());
        })
      )
      .subscribe((response) => {
        // console.log(response);
        // console.log(this.cookieService.get('Set-Cookie'));
      });
  }
}
