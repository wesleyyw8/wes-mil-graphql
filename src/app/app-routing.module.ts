import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
// http://localhost:4200/home/44/products/2
const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    path: 'home/:id/products',
    component: ProductsComponent
  },
  {
    path: 'details/:productid',
    component: ProductDetailsComponent,
    outlet: 'popup'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
