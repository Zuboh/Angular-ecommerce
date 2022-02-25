import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../services/prodotti.service';
import { Products } from '../model/products';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="container ">
      <div class="my-4">
        <h1>Dettagli Prodotto</h1>
        <div
          *ngIf="showSpin"
          class="spinner-border text-primary "
          role="status"
        ></div>
      </div>
      <div class="my-4" *ngFor="let detail of details">
        <h2>{{ detail.name }}</h2>
        <h4>{{ detail.price }} $</h4>
        <p>{{ detail.description }}</p>
        <button
          class="btn btn-primary"
          [routerLink]="['/carrello']"
          (click)="showCarrello()"
        >
          Aggiungi al carello
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class DetailsPage implements OnInit {
  details: Products[] = [];
  obj !: Products[];

  id: any;
  showSpin: boolean = true;
  roba: any;
  count:number = 0;

  constructor(
    private productService: ProdottiService,
    private Activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProdotti().subscribe((ris) => {
      this.details = ris;
      console.log(this.details);
      this.showSpin = false;
      this.Activatedroute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        this.details = this.details.filter((details) => details.id == this.id);
        this.obj = Object.assign({}, ...this.details);
        });
    });
  }

  showCarrello() {
    this.router.navigate(['carrello']);
    this.productService.addCarrello(this.obj);
  }
}
