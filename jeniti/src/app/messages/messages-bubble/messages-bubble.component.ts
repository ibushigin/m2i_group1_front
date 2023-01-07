import { Component, Input } from '@angular/core';
import { Message } from 'src/app/core/models/messages';

@Component({
  selector: 'app-messages-bubble',
  templateUrl: './messages-bubble.component.html',
  styleUrls: ['./messages-bubble.component.scss'],
})
export class MessagesBubbleComponent {
  @Input() message!: Message;
}
