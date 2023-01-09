import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private auth: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (data) => {
        if (data.isLogged) {
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.route.navigate(['/main']);
        } else {
          console.log('TU NE PASSES PAS');
        }
      },
      error: (error) => {
        console.log('Pas connecté degage');
      },
    });
  }
}
