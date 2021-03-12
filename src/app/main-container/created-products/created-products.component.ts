import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-created-products',
  templateUrl: './created-products.component.html',
  styleUrls: ['./created-products.component.scss']
})
export class CreatedProductsComponent implements OnInit {
  @Input() infoObj: any;
  constructor() { }

  getColor(price: number) {
    if (price<=100) {
      return 'green';
    } else if (price <= 200) {
      return 'blue';
    } else {
      return 'red';
    }
  }


  ngOnInit(): void {
  }

}

