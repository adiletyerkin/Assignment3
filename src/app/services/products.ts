export class Products{
  id: number;
  name: string;
  type: string;
  description: string;
  img: string;
  byweightornot: string;
  more: string;


constructor(id: number, name: string, type: string, description: string, img: string, byweightornot: string, more: string) {
  this.id = id;
  this.name = name;
  this.type = type;
  this.byweightornot = byweightornot;
  this.description = description;
  this.img = img;
  this.more = more;
}



}
