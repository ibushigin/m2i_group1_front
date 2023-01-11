import { Channel } from './channels';

export class UserForFront {
  public id!: number;
  public username!: string;
  public isLogged!: boolean;
  public current_channel!: Channel;
}
