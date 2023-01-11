import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/core/models/messages';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-get-messages',
  templateUrl: './get-messages.component.html',
  styleUrls: ['./get-messages.component.scss'],
})
export class GetMessagesComponent {
  public channelId!: number;
  public messagesBychannel$!: BehaviorSubject<Message[]>;

  constructor(
    private aRoute: ActivatedRoute,
    private mService: MessagesService
  ) {
    this.channelId = +this.aRoute.snapshot.params['id'];
    this.messagesBychannel$ = this.mService.bMessages$;
    this.mService.getMessageByChannelId(this.channelId);
  }
}
