import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from 'src/app/environ/env';
import { Channel } from '../models/channels';
import { User } from '../models/users';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private uService: UsersService) {}

  login(credential: Credential): Observable<User> {
    return this.http.post<User>(env.urlLogin, credential);
  }

  logout(user: User) {
    this.http.post<User>(env.urlLogout, user).subscribe({
      next: (data) => {
        localStorage.clear();
        this.uService.refresh();
      },
      error: (err) => {
        console.log('logout raté');
      },
    });
  }

  //BOF A NE PAS UTILISER
  getSessionUser(): User {
    const user: string | null = localStorage.getItem('currentUser');
    let sessionUser: User = new User();
    let sessionCurrentChannel: Channel = new Channel();
    if (user) {
      const obj: User = JSON.parse(user);

      sessionUser.id = obj.id;
      sessionUser.email = obj.email;
      sessionUser.password = obj.password;
      sessionUser.username = obj.username;
      sessionUser.isLogged = obj.isLogged;

      sessionCurrentChannel.id = obj.current_channel.id;
      sessionCurrentChannel.name = obj.current_channel.name;
      sessionCurrentChannel.created_at = obj.current_channel.created_at;
      sessionCurrentChannel.description = obj.current_channel.description;

      sessionUser.current_channel = sessionCurrentChannel;
    }
    return sessionUser;
  }
}
