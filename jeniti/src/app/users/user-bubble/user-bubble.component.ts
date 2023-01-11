import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { User } from 'src/app/core/models/users';

@Component({
  selector: 'app-user-bubble',
  templateUrl: './user-bubble.component.html',
  styleUrls: ['./user-bubble.component.scss'],
})
export class UserBubbleComponent{
  @Input() user!: User;

}
