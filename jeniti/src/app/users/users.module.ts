import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserBubbleComponent } from './user-bubble/user-bubble.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersListComponent, UserBubbleComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
