import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/core/models/channels';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-channel-solo',
  templateUrl: './channel-solo.component.html',
  styleUrls: ['./channel-solo.component.scss'],
})
export class ChannelSoloComponent {
  @Input() channel!: Channel;

  constructor(private cService: ChannelsService) {}

  deleteChannel(channelId: number): void {
    this.cService.deleteChannelbyId(channelId);
  }
}
