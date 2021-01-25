import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Img} from '../../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostFileService {

  constructor(
    private http: HttpClient,
    // private handleError: ,
  ) { }

  postFile(file: File): Observable<boolean> {
    const dir = './images/';
    const formData: FormData = new FormData();
    formData.append('product', file, 'new-product');
    return this.http.post(dir, formData)
      .pipe(
        map(() => {
          return true;
        })
        // catch((e) => this.handleError(e));
      )
  }

  fvCreateProduct(img: File): Observable<any> {
  // fvCreateProduct(img: File): void {
    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Content-Disposition', 'form-data; name="data"');
    // const fd = new FormData();
    // fd.append('image', file, file.name)
    const formData: FormData = new FormData();
    formData.append('avatar', img, img.name);
    // this.http.post('http://localhost:8080/admin/createproduct', formData);
    return this.http.post('http://localhost:8080/admin/createproduct', formData)
      .pipe(
        map(
          (response) => {
            console.log(response);
            return {
              ...formData
            }
          }
        )
      )
      // .subscribe(res => {
      //   console.log(res);
      // })
  }
}
