import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { ChannelModif } from '../models/channelModif';
import { Channel } from '../models/channels';
import { UserModifChannel } from '../models/userModifChannel';
import { User } from '../models/users';
import { UserSession } from '../models/userSession';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public bSessionUser$!: BehaviorSubject<User>;
  init: User = new User();

  constructor(private http: HttpClient, private uService: UsersService) {
    this.bSessionUser$ = new BehaviorSubject<User>(this.init);
  }

  login(credential: Credential): Observable<User> {
    return this.http.post<User>(env.urlLogin, credential);
  }

  logout() {
    this.refreshSessionUser().subscribe((user) => {
      let currentUserSession: UserSession = new UserSession();
      currentUserSession.id = user.id;
      currentUserSession.sessionId = user.sessionId;
      this.http
        .post(env.urlLogout, currentUserSession)
        .subscribe(() => localStorage.clear());
    });
  }

  changeChannel(idChannel: number) {
    let chan: ChannelModif = new ChannelModif();
    chan.id = idChannel;
    let uMofif: UserModifChannel = new UserModifChannel();
    uMofif.current_channel = chan;
    return this.refreshSessionUser().pipe(
      tap((user) => {
        this.http.put<User>(`${env.urlUsers}/${user.id}`, uMofif).subscribe();
      })
    );
  }

  getSessionUser() {
    let responseUser: User;
    let responseCurrent_channel: Channel;
    this.bSessionUser$.subscribe((data) => {
      responseUser.id = data.id;
      responseUser.email = data.email;
      responseUser.password = data.password;
      responseUser.username = data.username;
      responseUser.isLogged = data.isLogged;
      responseUser.sessionId = data.sessionId;

      responseCurrent_channel.id = data.current_channel.id;
      responseCurrent_channel.name = data.current_channel.name;
      responseCurrent_channel.created_at = data.current_channel.created_at;
      responseCurrent_channel.description = data.current_channel.description;

      responseUser.current_channel = responseCurrent_channel;

      return responseUser;
    });
  }

  refreshSessionUser(): Observable<User> {
    const user: string | null = localStorage.getItem('currentUser');
    if (user) {
      const storageUser: User = JSON.parse(user);
      return this.http
        .get<User>(
          `${env.urlUsersSession}/${storageUser.id}/${storageUser.sessionId}`
        )
        .pipe(
          tap({
            next: (data) => this.bSessionUser$.next(data),
            error: (err) =>
              console.log("Impossible de recup l'user de session"),
          })
        );
    }
    return new Observable<User>();

    // let sessionUser: User = new User();
    // let sessionCurrentChannel: Channel = new Channel();
    // if (user) {
    //   const obj: User = JSON.parse(user);

    //   sessionUser.id = obj.id;
    //   sessionUser.email = obj.email;
    //   sessionUser.password = obj.password;
    //   sessionUser.username = obj.username;
    //   sessionUser.isLogged = obj.isLogged;

    //   sessionCurrentChannel.id = obj.current_channel.id;
    //   sessionCurrentChannel.name = obj.current_channel.name;
    //   sessionCurrentChannel.created_at = obj.current_channel.created_at;
    //   sessionCurrentChannel.description = obj.current_channel.description;

    //   sessionUser.current_channel = sessionCurrentChannel;
    // }
    // return sessionUser;
  }
}
