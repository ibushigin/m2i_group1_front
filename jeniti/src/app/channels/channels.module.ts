import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsListComponent } from './channels-list/channels-list.component';


@NgModule({
  declarations: [
    ChannelsListComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
