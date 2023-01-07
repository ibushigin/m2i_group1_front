import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from 'src/app/core/models/channels';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss'],
})
export class ChannelsListComponent {
  channels$!: BehaviorSubject<Channel[]>;

  constructor(private cService: ChannelsService) {
    this.channels$ = this.cService.bChannels$;
  }
}
