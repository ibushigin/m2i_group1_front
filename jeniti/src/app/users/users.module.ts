import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserBubbleComponent } from './user-bubble/user-bubble.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [UserBubbleComponent],
    imports: [CommonModule, SharedModule],
  exports: [UserBubbleComponent],
})
export class UsersModule {}
