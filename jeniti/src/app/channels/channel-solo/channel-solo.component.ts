import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/core/models/channels';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-channel-solo',
  templateUrl: './channel-solo.component.html',
  styleUrls: ['./channel-solo.component.scss'],
})
export class ChannelSoloComponent implements OnInit {
  @Input() channel!: Channel;
  route!: string;

  constructor(private cService: ChannelsService) {}

  ngOnInit(): void {
    this.route = `/editChannel/${this.channel.id}`;
  }

  deleteChannel(channelId: number): void {
    this.cService.deleteChannelbyId(channelId);
  }
}
