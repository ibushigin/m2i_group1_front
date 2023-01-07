import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainMessagesContainerComponent } from './main-messages-container/main-messages-container.component';
import { MainMessagesFormComponent } from './main-messages-form/main-messages-form.component';
import { MainNavHeaderComponent } from './main-nav-header/main-nav-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainNavCardComponent } from './main-nav-card/main-nav-card.component';

@NgModule({
  declarations: [AppComponent, MainHeaderComponent, MainMessagesContainerComponent, MainMessagesFormComponent, MainNavHeaderComponent, MainNavComponent, MainNavCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
