import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { CategoryComponent } from './shared/components/category/category.component';
import { ProductPageComponent } from './shared/components/product-page/product-page.component';
import { BillingComponent } from './billing/billing.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/', pathMatch: 'full`'},
      {path: '', component: MainPageComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'category/product', component: ProductPageComponent},
    ]
  },
  {
    path: 'checkout', component: BillingComponent,
  },
  // {
  //   {path: 'checkout', loadChildren: () => import('./billing/') },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
