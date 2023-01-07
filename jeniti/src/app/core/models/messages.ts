import { Channel } from './channels';
import { User } from './users';

export class Message {
  public id!: number;
  public content!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public channel_id!: Channel;
  public user_id!: User;
}
