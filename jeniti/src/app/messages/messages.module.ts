import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MessagesBubbleComponent } from './messages-bubble/messages-bubble.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  declarations: [MessagesListComponent, MessagesBubbleComponent],
  imports: [CommonModule, MessagesRoutingModule, SharedModule],
  exports: [MessagesListComponent],
})
export class MessagesModule {}
