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
  public isActive!: boolean;
  public sessionUser$!: BehaviorSubject<User>;

  constructor(private cService: ChannelsService, private auth: AuthService) {
    this.hidden = true;
    this.isActive = false;
    this.sessionUser$ = auth.bSessionUser$;
  }

  ngOnInit(): void {
    this.route = `/editChannel/${this.channel.id}`;
    this.auth.refreshSessionUser().subscribe((data) => {
      if (data.current_channel.id == this.channel.id) {
        console.log('ok');
        this.isActive = true;
      }
    });
  }

  deleteChannel(channelId: number): void {
    this.cService.deleteChannelbyId(channelId);
  }

  public hide(): void {
    this.hidden = !this.hidden;
  }
}
