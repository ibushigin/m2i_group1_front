import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddChannelComponent } from './pages/add-channel/add-channel.component';
import { EditChannelComponent } from './pages/edit-channel/edit-channel.component';
import { GetMessagesComponent } from './pages/get-messages/get-messages.component';

const routes: Routes = [
  {
    path: 'addChannel',
    component: AddChannelComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editChannel/:id',
    component: EditChannelComponent,
    canActivate: [AuthGuard],
  },
  { path: ':id', component: GetMessagesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
