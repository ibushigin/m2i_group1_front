import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserBubbleComponent } from './user-bubble/user-bubble.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [UsersListComponent, UserBubbleComponent],
    imports: [CommonModule, UsersRoutingModule, SharedModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
