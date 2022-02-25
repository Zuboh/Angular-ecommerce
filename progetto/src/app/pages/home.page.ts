import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../model/products';
import { ProdottiService } from '../services/prodotti.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="my-4 d-flex justify-content-center">
      <div
        *ngIf="showSpin"
        class="spinner-border text-primary "
        role="status"
      ></div>
    </div>
    <div
      class="container d-flex justify-content-center"
      *ngFor="let prodotto of prodotti"
    >
      <div class="card my-3 " style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ prodotto.name }}</h5>
          <p class="card-text">{{ prodotto.description }}</p>
          <a [routerLink]="['/details',prodotto.id]" (click)="showDettagli(prodotto.id)"
            >Dettagli</a
          >
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomePage implements OnInit {
  prodotti: Products[] = [];
  showSpin: boolean = true;

  constructor(
    private productService: ProdottiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showProducts();
  }

  showDettagli(id:number) {
    this.router.navigate([`details/${id}`]);
  }

  showProducts() {
    this.productService.getProdotti().subscribe((ris) => {
      this.prodotti = ris;
      this.showSpin = false;
    });
  }
}
