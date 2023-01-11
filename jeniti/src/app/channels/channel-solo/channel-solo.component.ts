import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, tap } from 'rxjs';
import { Channel } from 'src/app/core/models/channels';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';

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
    private route: Router
  ) {}

  public changeChannel() {
    this.auth
      .changeChannel(this.channel.id)
      .pipe(
        tap((user) => {
          console.log(user);
          this.auth.bSessionUser$.next(user);
        }),
        mergeMap(() => this.mService.getMessageByChannelId(this.channel.id))
      )
      .subscribe(() => this.route.navigate(['main', this.channel.id]));
    // this.auth.changeChannel(this.channel.id).subscribe(() => {
    //   this.mService.getMessageByChannelId(this.channel.id).subscribe(() => {
    //     this.auth
    //       .refreshSessionUser()
    //       .subscribe(() => this.route.navigate(['main', this.channel.id]));
    //   });
    // });
    //   this.auth.changeChannel(this.channel.id).subscribe((user) => {
    //     this.mService.getMessageByChannelId(this.channel.id).subscribe(() => {
    //       this.auth.bSessionUser$.next(user);
    //       this.route.navigate(['main', this.channel.id]);
    //     });
    //   });
  }
}
