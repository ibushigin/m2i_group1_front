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

  getUserById(userId: number): Observable<User> {
    return this.http
      .get<User>(`${env.urlUsers}/${userId}`)
      .pipe(tap(() => this.refresh()));
  }

  deleteUserbyId(userId: number) {
    this.http
      .delete(`${env.urlUsers}/${userId}`)
      .subscribe(() => this.refresh());
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(env.urlRegister, user)
      .pipe(tap(() => this.refresh()));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(env.urlUsers, user)
      .pipe(tap(() => this.refresh()));
  }
}
