import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../model/products';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
export let carrello: Products[] = [];
@Injectable({
  providedIn: 'root',
})

export class ProdottiService {
  private urlProd = 'http://localhost:4201/products';
  details: Products[] = [];
   carrello: Products[] = [];
  id: any;

  constructor(
    private http: HttpClient,
    private Activatedroute: ActivatedRoute
  ) {}

  getProdotti() {
    return this.http.get<Products[]>(this.urlProd).pipe(
      tap((ris) => {
        ris;
      })
    );
  }

  addCarrello(details:any) {
     carrello.push(details);
  }

  clearCart(carello: Products[]) {
    carrello = [];
  }
}
