import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './shared/components/left-menu/left-menu.component';
import { MainPromotionComponent } from './shared/components/main-promotion/main-promotion.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ReviewComponent } from './shared/components/review/review.component';
import { MainPageComponent } from './shared/components/main-page/main-page.component';
import { CategoryComponent } from './shared/components/category/category.component';
import { CategoryMenuComponent } from './shared/components/category-menu/category-menu.component';
import { PathToPageComponent } from './shared/components/path-to-page/path-to-page.component';
import { ProductPageComponent } from './shared/components/product-page/product-page.component';
import { BillingComponent } from './billing/billing.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MainPromotionComponent,
    ProductCardComponent,
    ReviewComponent,
    MainPageComponent,
    CategoryComponent,
    CategoryMenuComponent,
    PathToPageComponent,
    ProductPageComponent,
    // BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
