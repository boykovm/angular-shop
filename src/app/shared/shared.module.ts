import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { BasketProductComponent } from './components/basket-product/basket-product.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import {MainPromotionComponent} from './components/main-promotion/main-promotion.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ReviewComponent} from './components/review/review.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {CategoryComponent} from './components/category/category.component';
import {CategoryMenuComponent} from './components/category-menu/category-menu.component';
import {PathToPageComponent} from './components/path-to-page/path-to-page.component';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ShopingCartComponent,
    BasketProductComponent,
    LeftMenuComponent,
    MainPromotionComponent,
    ProductCardComponent,
    ReviewComponent,
    MainPageComponent,
    CategoryComponent,
    CategoryMenuComponent,
    PathToPageComponent,
    ProductPageComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainLayoutComponent, children: [
          {path: '', redirectTo: '/', pathMatch: 'full'},
          {path: '', component: MainPageComponent},
          {path: 'category', component: CategoryComponent},
          {path: 'category/product', component: ProductPageComponent},
          {path: 'checkout', component: CheckoutComponent},
        ]
      }
    ])
  ]
})
export class SharedModule { }
