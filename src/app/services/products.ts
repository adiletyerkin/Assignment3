export class Products{
  id: number;
  name: string;
  type: string;
  typedict: string;
  price: number;
  description: string;
  img: string;
  byweightornot: string;


  constructor(id: number, name: string, type: string, typedict: string, byweightornot: string, price: number, description: string, img: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.typedict = typedict;
    this.byweightornot = byweightornot;
    this.price = price;
    this.description = description;
    this.img = img;
  }

}
