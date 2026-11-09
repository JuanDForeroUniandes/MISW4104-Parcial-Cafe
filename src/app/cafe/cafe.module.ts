import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeService } from './cafe.service';

@NgModule({
  imports: [CommonModule],
  providers: [CafeService],
})
export class CafeModule {}
