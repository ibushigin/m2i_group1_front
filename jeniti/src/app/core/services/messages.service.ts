import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { Message } from '../models/messages';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public bMessages$!: BehaviorSubject<Message[]>;

  constructor(private http: HttpClient) {
    this.bMessages$ = new BehaviorSubject<Message[]>([]);

  }


  getMessageById(messageId: number): Observable<Message> {
    return this.http.get<Message>(`${env.urlMessages}/${messageId}`);
  }

  getMessageByChannelId(channelId: number) {
    return this.http
      .get<Message[]>(`${env.urlMessages}/channel/${channelId}`)
      .pipe(tap((data) => this.bMessages$.next(data)));
  }

  deleteMessageOnChanellByIdChannel(messageId: number, channelId: number) {
    return this.http
      .delete(`${env.urlMessages}/${messageId}`)
      .pipe(tap(() => this.getMessageByChannelId(channelId).subscribe()));
  }

  addMessageOnChannelByIdChannel(message: Message, channelId: number) {
    return this.http
      .post<Message>(env.urlMessages, message)
      .pipe(tap(() => this.getMessageByChannelId(channelId).subscribe()));
  }

  updateMessageOnChannelByIdChannel(
    message: Message,
    channelId: number
  ): Observable<Message> {
    return this.http
      .put<Message>(`${env.urlMessages}/${message.id}`, message)
      .pipe(tap(() => this.getMessageByChannelId(channelId).subscribe()));
  }
}
