import {Injectable} from '@angular/core';
// @ts-ignore
import {Products} from '../products';

@Injectable()
export class ProductsService{
  constructor() {
  }
  // tslint:disable-next-line:typedef
  getProducts(){
    let productList: Products[];
    productList = [
      new Products(410, 'Aisulu', 'Candies', 'by wieght', 'Whipped egg-whites mass with creamy-vanilla flavor and coated with chocolate', 'http://www.rakhat.kz/app/uploads/cache/2017/06/KS_IMG_0767-0788-0789-1-800x600-c-default.jpg', ''),
      new Products(413, 'Aisulu Shocklate', 'Candies', 'by wieght', 'Glazed, whipped on protein mass, with taste of cream and vanilla, with adding of chocolate', 'http://www.rakhat.kz/app/uploads/cache/2017/06/KS_IMG_0769-0792-0793-1-800x600-c-default.jpg', ''),
      // new Products(413, 'Aisulu', 'Candies', 'by wieght', '', '', '')
      new Products(548, 'Koktem', 'Candies', 'by wieght', 'Tender souffle with vanilla flavor in chocolate glaze.', 'http://www.rakhat.kz/app/uploads/cache/2017/07/Kok-tem-800x600-c-default.jpg', ''),
      new Products(549, 'SOUFFLE WITH CHERRY TASTE', 'Candies', 'by wieght', 'Tender soufflé with cherry taste in chocolate glaze.', 'http://www.rakhat.kz/app/uploads/cache/2017/07/So-vkusom-vishni-800x600-c-default.jpg', '')

    ];

  }
}
