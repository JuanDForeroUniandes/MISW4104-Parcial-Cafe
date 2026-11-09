import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CafeListComponent } from './cafe-list.component';
import { CafeModule } from '../cafe.module';
import { Cafe } from '../cafe';
import { CAFES_URL } from '../cafe.service';

describe('CafeListComponent', () => {
  let fixture: ComponentFixture<CafeListComponent>;
  let httpMock: HttpTestingController;

  const tresCafes: Cafe[] = [
    new Cafe(
      1,
      'Café Especial para tí',
      'Blend',
      'Angelópolis, Antioquia',
      'Panela, Durazno, Caramelo',
      1920,
      'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg'
    ),
    new Cafe(
      2,
      'Café Especial Navegante',
      'Café de Origen',
      'Guatapé, Antioquia',
      'Cítrico, Naranja, Cacao',
      1800,
      'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png'
    ),
    new Cafe(
      3,
      'Café Especial El Prístino',
      'Blend',
      'Chinchiná, Caldas',
      'Chocolate negro, Caramelo',
      1700,
      'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png'
    ),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CafeListComponent);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe armar la tabla con tres filas y el encabezado', () => {
    fixture.detectChanges();
    httpMock.expectOne(CAFES_URL).flush(tresCafes);
    fixture.detectChanges();

    const tabla = fixture.nativeElement.querySelector('table');
    expect(tabla).not.toBeNull();

    expect(tabla.querySelectorAll('thead tr').length).toBe(1);
    expect(tabla.querySelectorAll('tbody tr').length).toBe(3);
    expect(tabla.textContent).toContain('Café Especial Navegante');
  });
});
