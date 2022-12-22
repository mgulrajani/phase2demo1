import { Component } from '@angular/core';
@Component({

  selector:'flat-list',
  templateUrl:'./flat-list.component.html',
  styleUrls:['./flat-list.component.css']
})
export  class FlatListComponent{
  showImage:boolean=false;
  imageWidth:number=50;
  imageHeight:number=50;
  imageMargin:number=5;

  annualRent=100000;

  person={name:'max',
address:'pune'}
 //any data type array
  flats:any[]=[
     {

    flatNumber:101,
    areaInSqFt:1000,
    numberOfRooms:2,
    numberOfBalconies:2,
    monthlyRent:20000,
    imageUrl:'../../assets/images/flat101.jpg'

  },{


      flatNumber:201,
      areaInSqFt:1500,
      numberOfRooms:3,
      numberOfBalconies:2,
      monthlyRent:25000,
      imageUrl:'../../assets/images/flat201.jpg'



  },{


      flatNumber:302,
      areaInSqFt:1500,
      numberOfRooms:3,
      numberOfBalconies:2,
      monthlyRent:26000,
      imageUrl:'../../assets/images/flat302.jpg'


  } ]

imageVisibility():void{

  this.showImage= !this.showImage;
}
}
