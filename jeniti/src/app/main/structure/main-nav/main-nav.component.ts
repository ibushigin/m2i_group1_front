import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Channel } from 'src/app/core/models/channels';
import { ChannelsService } from 'src/app/core/services/channels.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  channels$!: BehaviorSubject<Channel[]>;

  constructor(private cService: ChannelsService) {
    this.channels$ = this.cService.bChannels$;
  }
}
