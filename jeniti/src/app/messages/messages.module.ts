import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { MessagesService } from '../core/services/messages.service';
import { MessagesBubbleComponent } from './messages-bubble/messages-bubble.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [MessagesBubbleComponent],
  imports: [CommonModule, MessagesRoutingModule, SharedModule, FormsModule],
  exports: [MessagesBubbleComponent],
})
export class MessagesModule {
  constructor(private auth: AuthService, private mService: MessagesService) {
    this.auth
      .refreshSessionUser()
      .subscribe((user) =>
        this.mService.getMessageByChannelId(user.current_channel.id).subscribe()
      );
  }
}
