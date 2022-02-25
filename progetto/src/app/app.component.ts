import { Component } from '@angular/core';
import { carrello } from  '../app/services/prodotti.service';
import { Products } from './model/products';
@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-collapse" id="navbarText">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" routerLink="/"><i class="bi bi-house"></i> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/carrello"><i class="bi bi-cart"></i>  Carrello(<span>{{carrello.length}}</span>)</a>
        </li>
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'cart';
  carrello: Products[] = [] = carrello;
}
