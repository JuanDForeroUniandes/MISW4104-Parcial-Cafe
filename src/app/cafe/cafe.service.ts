import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cafe } from './cafe';

const CAFES_URL =
  'https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json';

@Injectable()
export class CafeService {
  private readonly http = inject(HttpClient);

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(CAFES_URL).pipe(
      map((items) =>
        items.map(
          (item) =>
            new Cafe(
              item.id,
              item.nombre,
              item.tipo,
              item.region,
              item.sabor,
              item.altura,
              item.imagen
            )
        )
      )
    );
  }
}
