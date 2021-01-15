import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {
  cartOpened = true;
  @Output() closeCart: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router,
  ) { }


  public continueShopping(): void{
    this.cartOpened = !this.cartOpened;
    this.closeCart.emit(this.cartOpened);
    return
  }


  toCheckout(): void {
    this.continueShopping();
    this.router.navigate(['checkout/']);
  }

  ngOnInit(): void {
  }

}
