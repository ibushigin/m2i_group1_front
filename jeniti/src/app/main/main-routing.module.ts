import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChannelComponent } from './pages/add-channel/add-channel.component';
import { EditChannelComponent } from './pages/edit-channel/edit-channel.component';
import { EditMessageComponent } from './pages/edit-message/edit-message.component';
import { GetMessagesComponent } from './pages/get-messages/get-messages.component';

const routes: Routes = [
  { path: '', component: GetMessagesComponent },
  { path: 'addChannel', component: AddChannelComponent },
  { path: 'editMessage/:id', component: EditMessageComponent },
  { path: 'editChannel/:id', component: EditChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
