import {Component, OnInit} from '@angular/core';
import {Product} from '../../interfaces';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  // products: Array<Product>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    const products: any = null;
    this.http.get('http://localhost:8080/products').subscribe((data: any) => {
      products = data
    });
    console.log(products);

  }

}
