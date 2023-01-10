import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../core/models/users';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-nav-header',
  templateUrl: './main-nav-header.component.html',
  styleUrls: ['./main-nav-header.component.scss'],
})
export class MainNavHeaderComponent {
  user$: BehaviorSubject<User>;
  constructor(private authService: AuthService) {
    this.user$ = this.authService.bSessionUser$;
  }
}
