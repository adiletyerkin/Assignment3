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



  @Output() myeventEmit = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  addingInfo(): void {
    // tslint:disable-next-line:max-line-length
    this.myeventEmit.emit({Name: this.Name, Type: this.Type, Description: this.Description, Quantity: this.Quantity, Price: this.Price, id: this.id });
    // tslint:disable-next-line:max-line-length
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
