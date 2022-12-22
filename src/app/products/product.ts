export enum Category{
    fruits, flowers ,vegetables,pulses,cereals
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;


}


