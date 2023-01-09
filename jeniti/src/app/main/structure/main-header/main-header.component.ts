import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent {
  user!: any;

  constructor() {
    this.user = localStorage.getItem('currentUser');
    console.log(typeof this.user);
    if (this.user) {
      this.user = JSON.parse(this.user);
    }
  }
}
