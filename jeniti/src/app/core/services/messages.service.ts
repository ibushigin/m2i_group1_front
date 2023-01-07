import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { Message } from '../models/messages';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public messages$!: Observable<Message[]>;
  public bMessages$!: BehaviorSubject<Message[]>;

  constructor(private http: HttpClient) {
    this.bMessages$ = new BehaviorSubject<Message[]>([]);
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<Message[]>(env.urlMessages)
      .subscribe((data) => this.bMessages$.next(data));
  }

  deleteMessagebyId(MessageId: number) {
    return this.http
      .delete(`${env.urlMessages}/${MessageId}`)
      .subscribe(() => this.refresh());
  }

  addMessage(Message: Message) {
    this.http
      .post<Message>(env.urlMessages, Message)
      .subscribe(() => this.refresh());
  }

  updateMessage(Message: Message): Observable<Message> {
    return this.http
      .put<Message>(env.urlMessages, Message)
      .pipe(tap(() => this.refresh()));
  }
}
