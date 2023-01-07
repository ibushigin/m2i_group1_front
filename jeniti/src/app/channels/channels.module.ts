import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChannelSoloComponent } from './channel-solo/channel-solo.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';

@NgModule({
  declarations: [ChannelsListComponent, ChannelSoloComponent],
  imports: [CommonModule],
  exports: [ChannelsListComponent, ChannelSoloComponent],
})
export class ChannelsModule {}
