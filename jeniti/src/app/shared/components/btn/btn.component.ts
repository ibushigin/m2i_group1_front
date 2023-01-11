import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() route!: string;

  constructor(private router: Router) {}

  goTo() {
    this.router.navigate([this.route]);
  }
}
