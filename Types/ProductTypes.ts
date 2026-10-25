export interface IProduct {
  _id:string;
  title: string;
  price: number;
  image: string;
  category: string;
  description?:string
}