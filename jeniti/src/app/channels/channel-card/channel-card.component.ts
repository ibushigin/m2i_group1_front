import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from 'src/app/core/models/channels';
import { User } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChannelsService } from 'src/app/core/services/channels.service';
import {UsersService} from "../../core/services/users.service";

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
})
export class ChannelCardComponent implements OnInit {
  @Input() channel!: Channel;
  @Input() usersOnChannel!: User[];
  public route!: string;
  public sessionUser$!: BehaviorSubject<User>;
  public users$!: BehaviorSubject<User[]>;


  constructor(private cService: ChannelsService, private auth: AuthService, private uService: UsersService) {
    this.sessionUser$ = auth.bSessionUser$;
    this.auth.refreshSessionUser().subscribe();
    this.users$ = uService.bUsers$;
  }

  ngOnInit(): void {
    this.route = `main/editChannel/${this.channel.id}`;
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
