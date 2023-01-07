import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { env } from 'src/app/environ/env';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users$!: Observable<User[]>;
  public bUsers$!: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.bUsers$ = new BehaviorSubject<User[]>([]);
    this.refresh();
  }

  refresh(): void {
    this.http
      .get<User[]>(env.urlUsers)
      .subscribe((data) => this.bUsers$.next(data));
  }

  deleteUserbyId(UserId: number) {
    return this.http
      .delete(`${env.urlUsers}/${UserId}`)
      .subscribe(this.refresh);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(env.urlRegister, User).pipe(tap(this.refresh));
  }

  updateUser(User: User): Observable<User> {
    return this.http.put<User>(env.urlUsers, User).pipe(tap(this.refresh));
  }
}
