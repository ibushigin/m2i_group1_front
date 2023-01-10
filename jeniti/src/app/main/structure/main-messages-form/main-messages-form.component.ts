import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/core/models/messages';
import { User } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-main-messages-form',
  templateUrl: './main-messages-form.component.html',
  styleUrls: ['./main-messages-form.component.scss'],
})
export class MainMessagesFormComponent {
  contentInput!: string;
  user$!: BehaviorSubject<User>;

  constructor(private mService: MessagesService, private auth: AuthService) {}

  onSubmit(): void {
    if (this.contentInput) {
      this.auth.refreshSessionUser().subscribe((user) => {
        let message: Message = new Message();
        message.content = this.contentInput;
        message.user_id = user;
        this.mService
          .addMessageOnChannelByIdChannel(message, user.current_channel.id)
          .subscribe();
        this.contentInput = '';
      });
    }
  }
}
