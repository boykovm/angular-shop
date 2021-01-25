import { Injectable } from '@angular/core';
import {MongoDbResponse, Product} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductAddService {

  constructor(
    private http: HttpClient,
  ) { }

  createProduct(product: Product): Observable<Product> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/admin/add', product)
      .pipe(
        map(
          (response) => {
            console.log(response);
            return {
              ...product
              // id: response.id
            };
          }
        )
      );
  }
}
