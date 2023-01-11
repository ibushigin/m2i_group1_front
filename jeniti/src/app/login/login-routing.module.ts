import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageLogoutComponent } from './page-logout/page-logout.component';
import { PageRegisterComponent } from './page-register/page-register.component';


const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'logout', component: PageLogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
