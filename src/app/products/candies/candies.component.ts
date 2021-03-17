import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-candies',
  templateUrl: './candies.component.html',
  styleUrls: ['./candies.component.scss']
})
export class CandiesComponent implements OnInit {

  id: string | null | undefined;

  constructor(private activatedRouter: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params => {
      console.log('activatedRouter.params: ', params);
      this.id = params.get('id');
    });
  }

}
