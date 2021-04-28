import {Component, EventEmitter, Output, OnInit, HostListener, ViewChild} from '@angular/core';
import {Products} from '../../services/products';
import {ProductsService} from '../../services/products.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-creat-products',
  templateUrl: './creat-products.component.html',
  styleUrls: ['./creat-products.component.scss']
})
export class CreatProductsComponent{

  name = '';
  type = '';
  description = '';
  price = 0;
  id = 0;
  typedict = '';
  img = '';
  byweightornot = '';

  options = [
    { name: 'Candies', value: 'Candies' },
    { name: 'Caramel', value: 'Caramel' },
    { name: 'Toffee(Iris)', value: 'Toffee(Iris)' },
    { name: 'Chocolates', value: 'Chocolates' },
    { name: 'Biscuits', value: 'Biscuits' },
    { name: 'Waffles', value: 'Waffles' },
    { name: 'Cocoa powder/ semi products', value: 'Cocoa powder/ semi products' },
    { name: 'Fruit jelly(Marmelad)', value: 'Fruit jelly(Marmelad)' }
  ];

  @Output() myeventEmit = new EventEmitter<object>();

  constructor(private productsService: ProductsService) {
  }

  // ngOnInit(): void {
  // }

  addingInfo(): void {
    this.myeventEmit.emit({
      name: this.name, type: this.type, description: this.description, typedict: this.typedict, price: this.price, id: this.id,
      img: this.img, byweightornot: this.byweightornot
    });
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


  get form(): NgForm {
    return this.form;
  }

  addProduct() {
    const product = new Products(this.id, this.name, this.type, this.typedict, this.byweightornot, this.price, this.description,
      this.img);
    this.productsService.addProduct(product);
    console.log(product);
  }



}
