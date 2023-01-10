import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { Channel } from '../models/channels';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  public channels$!: Observable<Channel[]>;
  public bChannels$!: BehaviorSubject<Channel[]>;

  constructor(private http: HttpClient) {
    this.bChannels$ = new BehaviorSubject<Channel[]>([]);
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<Channel[]>(env.urlChannels)
      .subscribe((data) => this.bChannels$.next(data));
  }

  allChannelInactive(): void {
    this.http
      .get<Channel[]>(env.urlChannels)
      .pipe(
        map((channels) => {
          console.log(channels);
          for (let channel of channels) {
            channel.isActive = false;
          }
          this.bChannels$.next(channels);
        })
      )
      .subscribe();
  }

  getChannelById(channelId: number) {
    return this.http.get<Channel>(`${env.urlChannels}/${channelId}`);
  }

  deleteChannelbyId(channelId: number) {
    return this.http
      .delete(`${env.urlChannels}/${channelId}`)
      .subscribe(() => this.refresh());
  }

  addChannel(channel: Channel) {
    this.http
      .post<Channel>(env.urlChannels, channel)
      .subscribe(() => this.refresh());
  }

  updateChannel(channel: Channel, idChannel: number): Observable<Channel> {
    return this.http
      .put<Channel>(`${env.urlChannels}/${idChannel}`, channel)
      .pipe(tap(() => this.refresh()));
  }
}
