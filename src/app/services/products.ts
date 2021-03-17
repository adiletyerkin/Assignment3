export class Products{
  id: number;
  name: string;
  type: string;
  typedict: string;
  description: string;
  img: string;
  byweightornot: string;
  more: string;


// tslint:disable-next-line:max-line-length
constructor(id: number, name: string, type: string, typedict: string, byweightornot: string, description: string, img: string,  more: string) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.typedict = typedict;
  this.byweightornot = byweightornot;
  this.description = description;
  this.img = img;
  this.more = more;
}



}
