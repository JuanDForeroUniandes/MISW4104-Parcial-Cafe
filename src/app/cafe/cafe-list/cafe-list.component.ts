import { Component, OnInit, inject } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css',
  standalone: false,
})
export class CafeListComponent implements OnInit {
  private readonly cafeService = inject(CafeService);

  cafes: Cafe[] = [];
  blendCount = 0;
  origenCount = 0;

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.actualizarConteos();
    });
  }

  private actualizarConteos(): void {
    this.blendCount = this.cafes.filter((c) => c.tipo === 'Blend').length;
    this.origenCount = this.cafes.filter((c) => c.tipo === 'Café de Origen').length;
  }
}
