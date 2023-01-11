import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channels';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';
import {UsersService} from "../../core/services/users.service";

@Component({
  selector: 'app-channel-solo',
  templateUrl: './channel-solo.component.html',
  styleUrls: ['./channel-solo.component.scss'],
})
export class ChannelSoloComponent {
  @Input() channel!: Channel;

  constructor(
    private auth: AuthService,
    private mService: MessagesService,
    private route: Router,
    private uService: UsersService
  ) {}

  public changeChannel() {
    this.auth.changeChannel(this.channel.id).subscribe(() => {
      this.mService.getMessageByChannelId(this.channel.id).subscribe(() => {
        this.auth
          .refreshSessionUser()
          .subscribe(()=>{
            this.uService.refresh().subscribe(() => this.route.navigate(['main', this.channel.id]))
          })
          ;
      });
    });
  }
}
