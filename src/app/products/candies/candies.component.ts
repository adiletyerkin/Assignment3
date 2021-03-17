import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../services/products';
import {Router} from '@angular/router';


@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrls: ['./candies.component.scss']
})
export class CandiesComponent implements OnInit {

  constructor(private products: ProductsService, private router: Router) {
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

  // tslint:disable-next-line:typedef
  // showMore(id: number){
  //   this.router.navigate(['DetailProdComponent', id]);
  //
  // }


}
