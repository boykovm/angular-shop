import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Product{
    let p: Product;
    this.http.get('http://localhost:8080/products').subscribe((data:Product) => {
      p = data;
    });
    return p;
  }
}
