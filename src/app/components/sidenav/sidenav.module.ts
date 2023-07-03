import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
})
export class SidenavModule {}
