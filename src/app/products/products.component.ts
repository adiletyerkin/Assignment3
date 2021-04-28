import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

products = [
  {id: 1, Name: 'Конфеты', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Konfety_360-h-120-450x150-c-default.jpg', href: '/CandiesComponent' },
  {id: 2, Name: 'Карамель', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Karamel_360-h-120-450x150-c-default.jpg', href: '' },
  {id: 3, Name: 'Ирис', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Iris_360-h-120-450x150-c-default.jpg', href: '' },
  {id: 4, Name: 'Шоколад', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/SHokolad_360-h-120-450x150-c-default.jpg', href: '/ChocolatesComponent' },
  {id: 5, Name: 'Печенье', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Pechene_360-h-120-450x150-c-default.jpg', href: '' },
  {id: 6, Name: 'Мармелад', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Marmelad_360-h-120-450x150-c-default.jpg', href: '' },
  // tslint:disable-next-line:max-line-length
  {id: 7, Name: 'Какое-порошок', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Kakao-poroshok_360-h-120-450x150-c-default.jpg', href: ''},
  {id: 8, Name: 'Вафли', Link: 'http://www.rakhat.kz/app/uploads/cache/2017/08/Vafli_360-h-120-450x150-c-default.jpg', href: '' }
];

  constructor() { }


  ngOnInit(): void {
  }

}
