import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';
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
    private router: Router,
    private auth: AuthService,
    private mService: MessagesService,
    private route: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      username: [null, Validators.required],
    });
  }

  onSubmit() {
    this.uService.addUser(this.registerForm.value).subscribe((user) => {
      const credential = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };

      this.auth.login(credential).subscribe({
        next: (user) => {
          if (user.isLogged) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.auth.refreshSessionUser().subscribe((user) =>
              this.mService
                .getMessageByChannelId(user.current_channel.id)
                .subscribe((messages) => {
                  this.route.navigate(['main', user.current_channel.id]);
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
    });

    () => this.router.navigate(['']);
  }
}
