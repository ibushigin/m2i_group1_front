import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/core/models/channels';

@Component({
  selector: 'app-channel-solo',
  templateUrl: './channel-solo.component.html',
  styleUrls: ['./channel-solo.component.scss'],
})
export class ChannelSoloComponent {
  @Input() channel!: Channel;
}
