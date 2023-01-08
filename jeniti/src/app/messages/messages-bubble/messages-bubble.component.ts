import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/core/models/messages';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-messages-bubble',
  templateUrl: './messages-bubble.component.html',
  styleUrls: ['./messages-bubble.component.scss'],
})
export class MessagesBubbleComponent implements OnInit {
  @Input() message!: Message;
  route!: string;

  constructor(private mService: MessagesService) {}

  ngOnInit(): void {
    this.route = `/editMessage/${this.message.id}`;
  }

  deleteMessage(idMessage: number): void {
    this.mService.deleteMessagebyId(idMessage);
  }
}
