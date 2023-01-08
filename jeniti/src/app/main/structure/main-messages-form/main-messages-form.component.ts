import { Component } from '@angular/core';
import { Message } from 'src/app/core/models/messages';
import { User } from 'src/app/core/models/users';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-main-messages-form',
  templateUrl: './main-messages-form.component.html',
  styleUrls: ['./main-messages-form.component.scss'],
})
export class MainMessagesFormComponent {
  contentInput!: string;
  idInput: number = 1;

  constructor(private mService: MessagesService) {}

  onSubmit(): void {
    if (this.contentInput) {
      let message: Message = new Message();
      let user: User = new User();
      user.id = this.idInput;
      message.content = this.contentInput;
      message.user_id = user;

      this.mService.addMessage(message);
      this.contentInput = '';
    }
  }
}
