import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent {
  loginForm!: FormGroup;
  wrongCredentials: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private cookieService: CookieService,
    private auth: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.auth
      .login(this.loginForm.value)
      .subscribe((response) =>
        this.cookieService.set('JSESSIONID', '71B3F11E7525B6E4502541EEC93C92D2')
      );

    // this.cookieService.this.cookieService.set(
    //   'email',
    //   this.loginForm.value.email
    // );
    // this.cookieService.set('password', this.loginForm.value.password);
    // console.log(this.cookieService.get('email'));
    // console.log(this.cookieService.get('password'));
    // const a = this.loginForm.value;
    // if (this.srvLogin.checkLogValues(this.loginForm.value)) {
    //   this.srvLogin.isloggedin = true;
    //   console.log(this.srvLogin.isloggedin);
    //   this.route.navigate(['/main']);
    // }
  }
}
