import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from 'src/app/core/models/channels';
import { User } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
})
export class ChannelCardComponent implements OnInit {
  @Input() channel!: Channel;
  @Input() usersOnChannel!: User[];
  public hidden: boolean;
  public route!: string;
  public isActive: boolean;
  public sessionUser$!: BehaviorSubject<User>;
  public channels$!: BehaviorSubject<Channel[]>;

  constructor(private cService: ChannelsService, private auth: AuthService) {
    this.hidden = true;
    this.isActive = false;
    this.channels$ = cService.bChannels$;
    this.sessionUser$ = auth.bSessionUser$;
  }

  ngOnInit(): void {
    this.route = `/editChannel/${this.channel.id}`;
  }

  deleteChannel(channelId: number): void {
    this.cService.deleteChannelbyId(channelId);
  }

  public changeToThisChannel(): void {
    this.auth.changeChannel(this.channel.id).subscribe((user) => {
      if (user.current_channel.id == this.channel.id) {
        this.cService.allChannelInactive();
        this.isActive = true;
      }
    });
    // this.hidden = !this.hidden;
  }
}
