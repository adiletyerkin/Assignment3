import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../services/products';


@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrls: ['./candies.component.scss']
})
export class CandiesComponent implements OnInit {

  constructor(private products: ProductsService) {
  }
  productList: any;
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.productList = this.products.getProducts();
  }
  // tslint:disable-next-line:typedef
  // addProduct(product: any){
  //   this.productList.push(product);
  // }


}
