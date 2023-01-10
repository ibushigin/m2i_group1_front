import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/core/models/messages';
import { User } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-messages-bubble',
  templateUrl: './messages-bubble.component.html',
  styleUrls: ['./messages-bubble.component.scss'],
})
export class MessagesBubbleComponent implements OnInit {
  @Input() message!: Message;
  route!: string;
  sessionUser$!: BehaviorSubject<User>;

  constructor(private mService: MessagesService, private auth: AuthService) {
    this.sessionUser$ = this.auth.bSessionUser$;
  }

  ngOnInit(): void {
    this.route = `/editMessage/${this.message.id}`;
  }

  deleteMessage(idMessage: number): void {
    this.mService.deleteMessagebyId(idMessage);
  }
}
