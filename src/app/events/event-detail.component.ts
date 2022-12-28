import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './events';

@Component({
  selector: 'event-detail',
  templateUrl:'./event-detail.component.html',
  styleUrls:['./event-detail.component.css']})

export class EventDetailComponent {
id:number=0;
  constructor(){}

  @Input() event:any;
  @Input() message:string='';


  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}
