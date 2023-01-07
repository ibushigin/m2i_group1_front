import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent],
})
export class SharedModule {}
