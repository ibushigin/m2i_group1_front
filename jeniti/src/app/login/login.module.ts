import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageLogoutComponent } from './page-logout/page-logout.component';
import { PageRegisterComponent } from './page-register/page-register.component';


@NgModule({
  declarations: [
    PageLoginComponent,
    PageRegisterComponent,
    PageLogoutComponent,
  ],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
})
export class LoginModule {}
