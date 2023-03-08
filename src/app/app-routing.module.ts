import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [{
  component: HomeComponent,
  path: 'home',
},{
  path: 'home/:id/products',
  component: ProductsComponent,
},
{
  path: 'home/:id/products/:productId',
  component: ProductDetailsComponent,
},
{
  component: AboutComponent,
  path: 'about'
}, {
  path: '',
  redirectTo: 'home', 
  pathMatch: 'full' 
}, 
// {
//   path: '**',
//   redirectTo: 'home'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
