import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-created-products',
  templateUrl: './created-products.component.html',
  styleUrls: ['./created-products.component.scss']
})
export class CreatedProductsComponent implements OnInit {
  @Input() infoObj: any;
  constructor() { }

  ngOnInit(): void {
  }

}
