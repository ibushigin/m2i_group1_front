import {Component, Input, OnInit} from '@angular/core';
import { Channel } from 'src/app/core/models/channels';
import { User } from 'src/app/core/models/users';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
})
export class ChannelCardComponent implements OnInit{
  @Input() channel!: Channel;
  @Input() usersOnChannel!: User[];
  public hidden: boolean;
  route!: string;

  constructor(private cService: ChannelsService) {
    this.hidden = true;
  }

  ngOnInit(): void {
  this.route = `/editChannel/${this.channel.id}`;
  }

  deleteChannel(channelId: number): void {
    this.cService.deleteChannelbyId(channelId);
  }

  public hide(): void {
    this.hidden = !this.hidden;
  }
}
