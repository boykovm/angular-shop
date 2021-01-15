import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  cartOpened = false;


  constructor() {
  }


  cartSwitch(): void {
    this.cartOpened = !this.cartOpened;
  }

  public closeCart(cartOpened: boolean): void {
    this.cartOpened = cartOpened;
  }


  ngOnInit(): void {
  }

}
