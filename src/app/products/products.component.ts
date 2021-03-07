import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

products = [
  {id: 1, Name: 'Конфеты', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Konfety_360-h-120-450x150-c-default.jpg' },
  {id: 2, Name: 'Карамель', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Karamel_360-h-120-450x150-c-default.jpg'},
  {id: 3, Name: 'Ирис', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Iris_360-h-120-450x150-c-default.jpg' },
  {id: 4, Name: 'Шоколад', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/SHokolad_360-h-120-450x150-c-default.jpg' },
  {id: 5, Name: 'Печенье', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Pechene_360-h-120-450x150-c-default.jpg'},
  {id: 6, Name: 'Мармелад', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Marmelad_360-h-120-450x150-c-default.jpg'},
  {id: 7, Name: 'Какое-порошок', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Kakao-poroshok_360-h-120-450x150-c-default.jpg'},
  {id: 8, Name: 'Вафли', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Vafli_360-h-120-450x150-c-default.jpg'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
