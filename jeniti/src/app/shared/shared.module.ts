import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './components/btn/btn.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [BtnComponent, IconComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [BtnComponent, IconComponent],
})
export class SharedModule {}
