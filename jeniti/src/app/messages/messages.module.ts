import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessagesBubbleComponent } from './messages-bubble/messages-bubble.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [MessagesListComponent, MessagesBubbleComponent],
  imports: [CommonModule, MessagesRoutingModule],
  exports: [MessagesListComponent],
})
export class MessagesModule {}
