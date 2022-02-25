import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from '../model/products';
import { ProdottiService,carrello } from '../services/prodotti.service';


@Component({
  selector: 'app-products',
  template: `
    <div class="container">
      <div class="my-4">
        <h2>Articoli</h2>
        <div
          *ngIf="showSpin"
          class="spinner-border text-primary"
          role="status"
        ></div>
      </div>
      <p *ngIf="carrello.length == 0">Il carrello è vuoto :(</p>
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
          *ngFor="let articolo of carrello"
        >
          {{ articolo.name }}
          <span class="badge bg-primary rounded-pill">{{
            articolo.price
          }} $</span>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class CartPage implements OnInit {
  showSpin: boolean = false;
  carrello: Products[] = [] = carrello;


  constructor(private productService: ProdottiService) {
  }

  ngOnInit(): void {
    console.log(this.carrello);
    }


}
