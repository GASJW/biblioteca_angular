import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [FormsModule, RouterModule],
  exports: [MenuComponent],
})
export class MenuModule {}
