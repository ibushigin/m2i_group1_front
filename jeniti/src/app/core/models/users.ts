import { Channel } from './channels';

export class User {
  public id!: number;
  public email!: string;
  public password!: string;
  public username!: string;
  public isLogged!: boolean;
  public current_channel!: Channel;
}
