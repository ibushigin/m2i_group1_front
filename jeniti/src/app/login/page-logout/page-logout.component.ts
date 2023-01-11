import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-page-logout',
  templateUrl: './page-logout.component.html',
  styleUrls: ['./page-logout.component.scss'],
})
export class PageLogoutComponent {
  constructor(private auth: AuthService, private route: Router) {
    this.auth.logout();
    this.route.navigate(['']);
  }
}
