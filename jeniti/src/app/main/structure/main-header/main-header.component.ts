import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../core/models/users';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  user$!: BehaviorSubject<User>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.bSessionUser$;

  }
}
