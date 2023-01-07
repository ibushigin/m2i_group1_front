import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageResetComponent } from './page-reset/page-reset.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'reset', component: PageResetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
