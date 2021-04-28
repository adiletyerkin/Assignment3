import { Component, OnInit } from '@angular/core';
import {Products} from '../../../services/products';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-detail-chocolate',
  templateUrl: './detail-chocolate.component.html',
  styleUrls: ['./detail-chocolate.component.scss']
})
export class DetailChocolateComponent implements OnInit {
  product: Products | undefined;
  productid: number | undefined;

  constructor(
    private activatedrouter: ActivatedRoute,
    private productsservice: ProductsService,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.productid = +this.activatedrouter.snapshot.paramMap.get('id');
    this.getDataByIdChok();
  }

  getDataByIdChok(){
    this.productsservice.getDataById(this.productid).subscribe(res => {
      this.product = res;
      console.log(this.product);

    });
  }

}
