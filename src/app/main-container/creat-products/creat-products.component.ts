import { Component, EventEmitter, Output,  OnInit } from '@angular/core';
import {Products} from '../../services/products';
import {ProductsService} from '../../services/products.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-creat-products',
  templateUrl: './creat-products.component.html',
  styleUrls: ['./creat-products.component.scss']
})
export class CreatProductsComponent implements OnInit {

  options = [
    { name: 'Candies', value: 'Candies' },
    { name: 'Caramel', value: 'Caramel' },
    { name: 'Toffee(Iris)', value: 'Toffee(Iris)' },
    { name: 'Chocolate', value: 'Chocolate' },
    { name: 'Biscuits', value: 'Biscuits' },
    { name: 'Waffles', value: 'Waffles' },
    { name: 'Cocoa powder/ semi products', value: 'Cocoa powder/ semi products' },
    { name: 'Fruit jelly(Marmelad)', value: 'Fruit jelly(Marmelad)' }
  ];

  name = '';
  type = '';
  description = '';
  price = 0;
  id = 0;
  typedict = '';
  img = '';
  byweightornot = '';

  @Output() myeventEmit = new EventEmitter<object>();

  constructor(private productsService: ProductsService,
              private formBuilder: FormBuilder,

  ) {
  }

  ngOnInit(): void {
  }

  addingInfo(): void {
    // tslint:disable-next-line:max-line-length
    this.myeventEmit.emit({
      name: this.name, type: this.type, description: this.description, typedict: this.typedict, price: this.price, id: this.id,
      img: this.img, byweightornot: this.byweightornot
    });
    // tslint:disable-next-line:max-line-length
    console.log({
      name: this.name, type: this.type, description: this.description, typedict: this.typedict, price: this.price, id: this.id,
      img: this.img, byweightornot: this.byweightornot
    });
    this.doDefaultValue();
  }

  doDefaultValue(): void {
    this.name = '';
    this.type = '';
    this.description = '';
    this.typedict = '';
    this.price = 0;
    this.id = 0;
    this.img = '';
    this.byweightornot = '';
  }

  // tslint:disable-next-line:typedef
  addProduct() {
    const product = new Products(this.id, this.name, this.type, this.typedict, this.byweightornot, this.price, this.description,
      this.img);
    this.productsService.addProduct(product);
    console.log(product);
  }



}






