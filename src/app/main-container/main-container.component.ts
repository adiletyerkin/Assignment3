import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {


  infoObj = [
    {id: 0, name: '', type: '', typedict: '', byweightornot: '', price: 0, description: '', img: ''}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  updateArray(newElem: any): void {
    this.infoObj.push(newElem);
  }

}
