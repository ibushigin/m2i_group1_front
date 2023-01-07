import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageLoginComponent} from "./page-login/page-login.component";
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageResetComponent } from './page-reset/page-reset.component';



@NgModule({
  declarations: [PageLoginComponent, PageRegisterComponent, PageResetComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
