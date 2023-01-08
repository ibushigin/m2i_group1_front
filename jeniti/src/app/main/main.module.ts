import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChannelsModule } from '../channels/channels.module';
import { MessagesModule } from '../messages/messages.module';
import { SharedModule } from '../shared/shared.module';
import { MainGabaritComponent } from './structure/main-gabarit/main-gabarit.component';
import { MainHeaderComponent } from './structure/main-header/main-header.component';
import { MainMessagesContainerComponent } from './structure/main-messages-container/main-messages-container.component';
import { MainMessagesFormComponent } from './structure/main-messages-form/main-messages-form.component';
import { MainNavHeaderComponent } from './main-nav-header/main-nav-header.component';
import { MainNavComponent } from './structure/main-nav/main-nav.component';
import { MainRoutingModule } from './main-routing.module';
import { AddChannelComponent } from './pages/add-channel/add-channel.component';
import { EditChannelComponent } from './pages/edit-channel/edit-channel.component';
import { EditMessageComponent } from './pages/edit-message/edit-message.component';
import { GetMessagesComponent } from './pages/get-messages/get-messages.component';

@NgModule({
  declarations: [
    MainNavHeaderComponent,
    MainNavComponent,
    MainMessagesFormComponent,
    MainMessagesContainerComponent,
    MainHeaderComponent,
    MainGabaritComponent,
    AddChannelComponent,
    EditChannelComponent,
    EditMessageComponent,
    GetMessagesComponent,
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
  exports: [
    GetMessagesComponent,
    EditChannelComponent,
    EditMessageComponent,
    AddChannelComponent,
  ],
})
export class MainModule {}
