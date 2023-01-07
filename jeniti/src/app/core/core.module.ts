import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [LoginModule, MainModule],
})
export class CoreModule {}
