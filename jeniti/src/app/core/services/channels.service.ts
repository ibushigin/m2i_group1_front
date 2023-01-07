import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { Channel } from '../models/channels';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  public channels$!: Observable<Channel[]>;
  public bChannel$!: BehaviorSubject<Channel[]>;

  constructor(private http: HttpClient) {
    this.channels$ = this.http.get<Channel[]>(env.urlChannels);
  }

  refresh(): void {
    this.http.get<Channel[]>(env.urlChannels).subscribe(this.bChannel$.next);
  }

  deleteChannelbyId(channelId: number) {
    return this.http
      .delete(`${env.urlChannels}/${channelId}`)
      .subscribe(this.refresh);
  }

  addChannel(channel: Channel): Observable<Channel> {
    return this.http
      .post<Channel>(env.urlChannels, channel)
      .pipe(tap(this.refresh));
  }

  updateChannel(channel: Channel): Observable<Channel> {
    return this.http
      .put<Channel>(env.urlChannels, channel)
      .pipe(tap(this.refresh));
  }
}