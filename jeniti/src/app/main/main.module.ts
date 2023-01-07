import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChannelsModule } from '../channels/channels.module';
import { MessagesModule } from '../messages/messages.module';
import { SharedModule } from '../shared/shared.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainMessagesContainerComponent } from './main-messages-container/main-messages-container.component';
import { MainMessagesFormComponent } from './main-messages-form/main-messages-form.component';
import { MainNavHeaderComponent } from './main-nav-header/main-nav-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainRoutingModule } from './main-routing.module';
import { MainUiComponent } from './main-ui/main-ui.component';

@NgModule({
  declarations: [
    MainNavHeaderComponent,
    MainNavComponent,
    MainUiComponent,
    MainMessagesFormComponent,
    MainMessagesContainerComponent,
    MainHeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    ChannelsModule,
    MessagesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [MainUiComponent],
})
export class MainModule {}
