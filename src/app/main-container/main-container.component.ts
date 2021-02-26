import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {


  infoObj = [
    {Name: '', Description: '', Quantity: 0, Price: 0, id : 0}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  updateArray(newElem: any): void {
    this.infoObj.push(newElem);
  }

}
