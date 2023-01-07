import { Component, Input } from '@angular/core';
import { Channel } from 'src/app/core/models/channels';
import { User } from 'src/app/core/models/users';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss'],
})
export class ChannelCardComponent {
  @Input() channel!: Channel;
  @Input() usersOnChannel!: User[];
  public hidden: boolean;

  constructor() {
    this.hidden = false;
  }

  public hide(): void {
    this.hidden = !this.hidden;
  }
}
