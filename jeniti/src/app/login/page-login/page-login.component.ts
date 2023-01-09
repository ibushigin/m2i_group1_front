import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/core/services/session-login.service';

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
    private sessionLogin: SessionLoginService,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.wrongCredentials = false;
    this.sessionLogin
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (result) => {
          this.route.navigate(['/main']);
        },
        error: (error) => {
          this.wrongCredentials = true;
        },
      });
  }
}
