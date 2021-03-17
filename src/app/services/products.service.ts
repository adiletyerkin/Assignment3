import {Injectable} from '@angular/core';
import {Products} from './products';

@Injectable()
export class ProductsService{
  constructor() {
    this.init();
  }
   productList: Products[] = [];
  // tslint:disable-next-line:typedef
  getProducts(){

    return this.productList;
  }
  // tslint:disable-next-line:typedef
  addProduct(product: Products){
    this.productList.push(product);
    console.log(this.productList);
  }

  // tslint:disable-next-line:typedef
  init(){
    const typedict = {
      1: 'CANDY WITH WHIPPED EGG-WHITE BODY COATED WITH CHOCOLATE',
      2: 'CANDIES WITH STUFFING',
      3: 'COATED CANDIED ROASTED NUTS',
      4: 'CANDIES IN FANCY BOXES'
    };

    this.productList = [
      new Products(410, 'Aisulu', 'Candies', typedict[1], 'by wieght', 1200, 'Whipped egg-whites mass with creamy-vanilla flavor and coated with chocolate', 'http://www.rakhat.kz/app/uploads/cache/2017/06/KS_IMG_0767-0788-0789-1-800x600-c-default.jpg'),
      new Products(413, 'Aisulu Shocklate', 'Candies', typedict[1], 'by wieght', 1300,  'Glazed, whipped on protein mass, with taste of cream and vanilla, with adding of chocolate', 'http://www.rakhat.kz/app/uploads/cache/2017/06/KS_IMG_0769-0792-0793-1-800x600-c-default.jpg'),
      // new Products(413, 'Aisulu', 'Candies', 'by wieght', '', '', '')
      new Products(548, 'Koktem', 'Candies', typedict[1], 'by wieght', 1000,  'Tender souffle with vanilla flavor in chocolate glaze.', 'http://www.rakhat.kz/app/uploads/cache/2017/07/Kok-tem-800x600-c-default.jpg'),
      new Products(549, 'SOUFFLE WITH CHERRY TASTE', 'Candies', typedict[1], 'by wieght', 1800, 'Tender soufflé with cherry taste in chocolate glaze.', 'http://www.rakhat.kz/app/uploads/cache/2017/07/So-vkusom-vishni-800x600-c-default.jpg'),
      new Products(525, 'Dostyk', 'Candies', typedict[2], 'by wieght', 1750, 'With soft stewed milky and creamy filling creme brulee on the base of whole condensed milk and natural butter, with adding of cognac and spirit.', 'http://www.rakhat.kz/app/uploads/cache/2017/07/Dostyk-vse-800x600-c-default.jpg'),
      new Products(507, 'Grillazh', 'Candies', typedict[3], 'by wieght', 1850, 'Candied roasted peanuts mass, coated with chocolate glaze.', 'http://www.rakhat.kz/app/uploads/cache/2017/06/KS_IMG_0043-0640-0661-1-800x600-c-default.jpg'),
      new Products(10046, 'QAZAQSTAN ÓNERI', 'Candies', typedict[4], 'decorative box 270g', 3000, 'Set of chocolate candies with fondant fillings: crème brûlée filling with vanilla aroma; chocolate filling with vanilla aroma; creamy filling with aroma of milk and cream.', 'http://www.rakhat.kz/app/uploads/cache/2020/11/Kuttyktajmyz-800h600-800x600-c-default.jpg')
    ];
  }
}
