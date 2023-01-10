import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {User} from "../../../core/models/users";

@Component({
  selector: 'app-main-nav-header',
  templateUrl: './main-nav-header.component.html',
  styleUrls: ['./main-nav-header.component.scss'],
})
export class MainNavHeaderComponent {
  user: User;
  constructor(private authService: AuthService) {
    this.user = this.authService.getSessionUser();
  }
}

