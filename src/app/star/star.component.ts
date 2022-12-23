import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit ,OnChanges{
  //rating and cropping of the stars
  @Input() rating:number=0;
  cropWidth:number =75;



  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    this.cropWidth =  this.rating *75/5;

  }

  ngOnInit(): void {
  }

}
