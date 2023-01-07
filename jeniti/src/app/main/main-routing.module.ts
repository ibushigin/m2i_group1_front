import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUiComponent } from './main-ui/main-ui.component';

const routes: Routes = [{ path: '', component: MainUiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
