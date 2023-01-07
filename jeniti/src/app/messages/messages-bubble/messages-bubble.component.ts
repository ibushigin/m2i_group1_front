import { Component, Input } from '@angular/core';
import { Message } from 'src/app/core/models/messages';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-messages-bubble',
  templateUrl: './messages-bubble.component.html',
  styleUrls: ['./messages-bubble.component.scss'],
})
export class MessagesBubbleComponent {
  @Input() message!: Message;

  constructor(private mService: MessagesService) {}

  deleteMessage(idMessage: number) {
    this.mService.deleteMessagebyId(idMessage);
  }
}
