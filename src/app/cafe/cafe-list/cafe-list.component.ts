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

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }
}
