import { Component, Input, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import { Message } from 'src/app/core/models/messages';
import { User } from 'src/app/core/models/users';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessagesService } from 'src/app/core/services/messages.service';


@Component({
  selector: 'app-messages-bubble',
  templateUrl: './messages-bubble.component.html',
  styleUrls: ['./messages-bubble.component.scss'],
})
export class MessagesBubbleComponent implements OnInit {
  @Input() message!: Message;
  route!: string;
  sessionUser$!: BehaviorSubject<User>;
  msgHidden: boolean = false;
  editHidden: boolean = true;
  contentInput!: string;
  idMessage!: number;
  message$!: Observable<Message>;

  constructor(
    private mService: MessagesService,
    private auth: AuthService) {
    this.sessionUser$ = this.auth.bSessionUser$;
  }

  ngOnInit(): void {
    this.idMessage = this.message.id;
    this.message$ = this.mService
      .getMessageById(this.idMessage)
      .pipe(tap((data)=>
        (this.contentInput = data.content)
      ));


  }

  deleteMessage(idMessage: number): void {
    this.mService.deleteMessagebyId(idMessage);
  }
  hide(){
    this.msgHidden = true;
    this.editHidden = false;
  }
  onSubmit(){
    this.msgHidden = false;
    this.editHidden = true;
    if(this.contentInput){
      let newMessage: Message = new Message();
      newMessage.id = this.idMessage;
      newMessage.content = this.contentInput;
      this.mService.updateMessage(newMessage).subscribe();
    }
  }
}
