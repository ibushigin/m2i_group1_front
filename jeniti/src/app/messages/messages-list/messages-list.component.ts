import {Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/core/models/messages';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent {
  public messages$!: BehaviorSubject<Message[]>;

  constructor(private mService: MessagesService) {
    this.messages$ = this.mService.bMessages$;
  }

}
