import { Channel } from './channels';

export class User {
  public id?: number;
  public email?: string;
  public password?: string;
  public username!: string;
  public isLogged!: boolean;
  public sessionId?: string;
  public current_channel!: Channel;
}
