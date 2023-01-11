import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoginModule],
})
export class CoreModule {}
