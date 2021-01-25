import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Img, Product} from '../../../shared/interfaces';
import {ProductAddService} from '../../shared/services/product-add.service';
import {Router} from '@angular/router';
import { PostFileService } from '../../shared/services/post-file.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit {
  form: FormGroup | any;
  images: Array<any> = [''];
  selectedFile: any = null;

  constructor(
    private newProduct: ProductAddService,
    private router: Router,
    private fileUploadService: PostFileService,
  ) { }

  ngOnInit(): any {
    this.form = new FormGroup({
      category: new FormControl(null),
      productName: new FormControl(null),
      price: new FormControl(null),
      shortDescription: new FormControl(null),
      fullDescription: new FormControl(null),
    });
  }

  fvs() {
    // const img: Img = {
    //   image: this.selectedFile
    // }
    console.log('started')
    this.fileUploadService.fvCreateProduct(this.selectedFile).subscribe(() => {
      console.log('Image had been added');
    })
  }

  addImage(file: any) {
    file = file.files;
    this.selectedFile = file[0];
    this.images.push(file[0]);
  }

  addProduct() {
    console.log('add product start');

    // this.checkImages();

    // const urls = [''];

    // for (let img of this.images) {
    //   this.fileUploadService.postFile(img).subscribe(data => {
    //     console.log('success')
    //     console.log(data);
    //   }, error => {
    //     console.log(error)
    //   })
    // }

    const product: Product = {
      category: this.form.value.category,
      productName: this.form.value.productName,
      price: this.form.value.price,
      shortDescription: this.form.value.shortDescription,
      fullDescription: this.form.value.fullDescription,
      // images: urls
    };

    this.newProduct.createProduct(product).subscribe(() => {
      this.form.reset();
      console.log('Product had been added');
      this.router.navigate(['admin', 'dashboard']);
    });
  }

  checkImages(): void {
    const images: Array<string> = [];
    for (let img of this.images) {
      if (img !== '' && img !== null) {
        images.push(img);
      }
    }
    for (let i of images) {
      console.log(i)
    }
    // this.images = images
  }

  createImages() {

  }
}
