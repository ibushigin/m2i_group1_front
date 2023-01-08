import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Message } from 'src/app/core/models/messages';
import { MessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss'],
})
export class EditMessageComponent {
  contentInput!: string;

  idMessage!: number;
  message$!: Observable<Message>;

  constructor(
    private mService: MessagesService,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {
    this.idMessage = +this.aRouter.snapshot.params['id'];
    this.message$ = this.mService
      .getMessageById(this.idMessage)
      .pipe(tap((data) => (this.contentInput = data.content)));
  }

  onSubmit(): void {
    if (this.contentInput) {
      let newMessage: Message = new Message();
      newMessage.id = this.idMessage;
      newMessage.content = this.contentInput;
      this.mService
        .updateMessage(newMessage)
        .subscribe(() => this.router.navigateByUrl('/main'));
    }
  }
}
