import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Products} from '../../../services/products';
import {ProductsService} from '../../../services/products.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.scss']
})
export class DetailProdComponent implements OnInit {
  // select: number | undefined;
  // id$: Observable<number> | undefined;
  id: number | undefined;
  product = new Products(1, '', '', '', '', 0, '', '');
  constructor(private activatedRouter: ActivatedRoute, private products: ProductsService,
              private router: Router ) { }
  productList: any;

  ngOnInit(): void {
    // @ts-ignore
    // this.id = this.activatedRouter.snapshot.paramMap.get('id');
    // this.getProduct();
   // this.id = +this.activatedRouter.snapshot.paramMap.get('id');

   this.router.events.subscribe((val) => {
      // @ts-ignore
     const id = +this.activatedRouter.snapshot.paramMap.get('id');
     this.productList = this.products.getProducts();
     // console.log(this.productList);
     // tslint:disable-next-line:prefer-for-of
     for (let i = 0; i < this.productList.length; i += 1){
       if (id === this.productList[i].id) {
         this.product = this.productList[i];
       }
     }
     console.log(this.product);
    });

    // @ts-ignore
    // this.id$ = this.activatedRouter.paramMap.pipe(
    //   switchMap(params =>{
    //     this.select = Number(params.get('id'));
    //     return undefined;
    //   })
    // );

   // this.activatedRouter.queryParamMap.subscribe(queryParams => {
   //    console.log('******query params: ', queryParams);
   //  });
    // tslint:disable-next-line:prefer-const
   // this.productList = this.products.getProducts();
   // console.log(this.productList);

    // tslint:disable-next-line:prefer-for-of
   // for (let i = 0; i < this.productList.length; i += 1){
   //    if (this.id === this.productList[i].id) {
   //      this.product = this.productList[i];
   //    }
   //  }


  }


}
