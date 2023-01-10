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
  public isActive$!: BehaviorSubject<Boolean>;
  public sessionUser$!: BehaviorSubject<User>;

  constructor(private cService: ChannelsService, private auth: AuthService) {
    this.hidden = true;
    this.isActive$ = new BehaviorSubject<Boolean>(false);
    this.sessionUser$ = auth.bSessionUser$;
  }

  ngOnInit(): void {
    this.route = `/editChannel/${this.channel.id}`;
    this.auth.refreshSessionUser().subscribe((data) => {
      if (data.current_channel.id == this.channel.id) {
        this.isActive$.next(true);
      } else {
        this.isActive$.next(false);
      }
    });
  }

  deleteChannel(channelId: number): void {
    this.cService.deleteChannelbyId(channelId);
  }

  public hide(): void {
    // this.auth.changeChannel(this.channel.id).subscribe((user) => {
    //   if (user.current_channel.id == this.channel.id) {
    //     this.isActive$.next(true);
    //   } else {
    //     this.isActive$.next(false);
    //   }
    //   this.hidden = !this.hidden;
    // });
  }
}
