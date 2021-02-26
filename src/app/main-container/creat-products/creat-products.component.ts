import { Component, EventEmitter, Output,  OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-products',
  templateUrl: './creat-products.component.html',
  styleUrls: ['./creat-products.component.scss']
})
export class CreatProductsComponent implements OnInit {

  Name = '';
  Description = '';
  Quantity = 0;
  Price = 0;
  id  = 0;

  @Output() myeventEmit = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  addingInfo(): void {
    this.myeventEmit.emit({Name: this.Name, Description: this.Description, Quantity: this.Quantity, Price: this.Price, id: this.id });
    console.log({Name: this.Name, Description: this.Description, Quantity: this.Quantity, Price: this.Price, id: this.id });
    this.doDefaultValue();
  }

  doDefaultValue(): void {
    this.Name = '';
    this.Description = '';
    this.Quantity = 0;
    this.Price = 0;
    this.id = 0;
  }

}
