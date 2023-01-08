import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UsersModule } from '../users/users.module';
import { ChannelCardComponent } from './channel-card/channel-card.component';
import { ChannelSoloComponent } from './channel-solo/channel-solo.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';

@NgModule({
  declarations: [
    ChannelsListComponent,
    ChannelSoloComponent,
    ChannelCardComponent,
  ],
  imports: [CommonModule, UsersModule, SharedModule],
  exports: [ChannelsListComponent],
})
export class ChannelsModule {}
