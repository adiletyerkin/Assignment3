import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../services/products';

@Component({
  selector: 'app-chocolates',
  templateUrl: './chocolates.component.html',
  styleUrls: ['./chocolates.component.scss']
})
export class ChocolatesComponent implements OnInit {
  productsChoko: Products[] = [];

  constructor(
    private productsservice: ProductsService) { }

  ngOnInit(): void {
    this.getdataChoco();
  }

  getdataChoco(){
    this.productsservice.getData().subscribe(res => {
      this.productsChoko = res;
    });
  }

}
