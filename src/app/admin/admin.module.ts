import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminMainPageComponent } from './components/admin-main-page/admin-main-page.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotComponent } from './components/forgot/forgot.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminMainPageComponent,
    AdminAddProductComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminOrdersComponent,
    AdminLoginComponent,
    SignupComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: AdminLoginComponent},
          {path: 'signup', component: SignupComponent},
          {path: 'forgot', component: ForgotComponent},
          {path: 'dashboard', component: AdminMainPageComponent},
          {path: 'add', component: AdminAddProductComponent},
          {path: 'orders', component: AdminOrdersComponent},
        ]
      }
    ]),
  ]
})
export class AdminModule { }
