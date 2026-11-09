import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeService } from './cafe.service';

@NgModule({
  declarations: [CafeListComponent],
  imports: [CommonModule],
  exports: [CafeListComponent],
  providers: [CafeService],
})
export class CafeModule {}
