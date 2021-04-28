import { Component, OnInit } from '@angular/core';
import {Products} from '../../../services/products';
import {ActivatedRoute, Route, Router} from '@angular/router';
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
    private router: Router

  ) { }

  ngOnInit(): void {

    this.router.events.subscribe((val) => {
      // @ts-ignore
      const id = +this.activatedrouter.snapshot.paramMap.get('id');
      this.getDataByIdChok(id);
    });
  }

  getDataByIdChok(id: number){
    this.productsservice.getDataById(id).subscribe(res => {
      this.product = res;
      console.log(this.product);

    });
  }

}
