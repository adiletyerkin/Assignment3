import { Component, EventEmitter, Output,  OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-products',
  templateUrl: './creat-products.component.html',
  styleUrls: ['./creat-products.component.scss']
})
export class CreatProductsComponent implements OnInit {

  Name = '';
  Type = '';
  Description = '';
  Quantity = 0;
  Price = 0;
  id  = 0;

  // products = [
  //   {id: 1, name: 'banana', price: 100},
  //   {id: 2, name: 'apple', price: 200},
  //   {id: 3, name: 'pineapple', price: 500}
  // ];
  //
  // getColor(price: number) {
  //   if (price<=100) {
  //     return 'green';
  //   } else if (price <= 200) {
  //     return 'blue';
  //   } else {
  //     return 'red';
  //   }
  // }

  @Output() myeventEmit = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  addingInfo(): void {
    this.myeventEmit.emit({Name: this.Name, Type: this.Type, Description: this.Description, Quantity: this.Quantity, Price: this.Price, id: this.id });
    console.log({Name: this.Name, Type: this.Type, Description: this.Description, Quantity: this.Quantity, Price: this.Price, id: this.id });
    this.doDefaultValue();
  }

  doDefaultValue(): void {
    this.Name = '';
    this.Type = '';
    this.Description = '';
    this.Quantity = 0;
    this.Price = 0;
    this.id = 0;
  }

}
