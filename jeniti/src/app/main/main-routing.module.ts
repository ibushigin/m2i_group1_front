import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChannelComponent } from './pages/add-channel/add-channel.component';
import { GetMessagesComponent } from './pages/get-messages/get-messages.component';

const routes: Routes = [
  { path: '', component: GetMessagesComponent },
  { path: 'addChannel', component: AddChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
