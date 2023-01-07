import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageResetComponent } from './page-reset/page-reset.component';

@NgModule({
  declarations: [PageLoginComponent, PageRegisterComponent, PageResetComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
