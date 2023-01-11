import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { ChannelModif } from '../models/channelModif';
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

  login(credential: any): Observable<User> {
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
  }
}
