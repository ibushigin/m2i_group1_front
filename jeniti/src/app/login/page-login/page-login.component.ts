import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';
import { UsersService } from '../../core/services/users.service';

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
    private auth: AuthService,
    private mService: MessagesService,
    private uService: UsersService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (user) => {
        if (user.isLogged) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.auth.refreshSessionUser().subscribe((user) =>
            this.mService
              .getMessageByChannelId(user.current_channel.id)
              .subscribe((messages) => {
                this.uService.refresh().subscribe(() => {
                  this.route.navigate(['main', user.current_channel.id]);
                });
              })
          );
        } else {
          console.log('TU NE PASSES PAS');
        }
      },
      error: (error) => {
        console.log('Erreur');
      },
    });
  }
}
