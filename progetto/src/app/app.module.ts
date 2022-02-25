import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home.page';
import { CartPage } from './pages/cart.page';
import { DetailsPage } from './pages/details.page';
const routes : Routes = [
  {
    path : '',
    component : HomePage
  },
  {
    path: 'carrello',
    component : CartPage
  },
  {
    path: 'details/:id',
    component : DetailsPage
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CartPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
