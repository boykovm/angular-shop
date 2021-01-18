import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
// import { MainPageComponent } from './shared/components/main-page/main-page.component';
// import { CategoryComponent } from './shared/components/category/category.component';
// import { ProductPageComponent } from './shared/components/product-page/product-page.component';
// import { CheckoutComponent } from './shared/components/checkout/checkout.component';
// import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  // {
  //   path: '', component: MainLayoutComponent, children: [
  //     {path: '', redirectTo: '/', pathMatch: 'full'},
  //     {path: '', component: MainPageComponent},
  //     {path: 'category', component: CategoryComponent},
  //     {path: 'category/product', component: ProductPageComponent},
  //     {path: 'checkout', component: CheckoutComponent},
  //   ]
  // },
  {
    path: '', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
