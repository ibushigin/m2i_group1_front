import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public bUsers$!: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.bUsers$ = new BehaviorSubject<User[]>([]);
    this.refresh().subscribe();
  }

  refresh() {
    return this.http
      .get<User[]>(env.urlUsers)
      .pipe(tap((users) => this.bUsers$.next(users)));
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(env.urlRegister, user);
  }


}
