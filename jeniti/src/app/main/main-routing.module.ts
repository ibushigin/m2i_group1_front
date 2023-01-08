import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetMessagesComponent } from './pages/get-messages/get-messages.component';

const routes: Routes = [{ path: '', component: GetMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
