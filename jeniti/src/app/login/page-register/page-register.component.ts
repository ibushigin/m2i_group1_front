import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss'],
})
export class PageRegisterComponent {
  registerForm!: FormGroup;
  constructor(
    private uService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      username: [null, Validators.required],
    });
  }

  onSubmit() {
    this.uService
      .addUser(this.registerForm.value)
      .subscribe(() => this.router.navigateByUrl('/main'));
  }
}
