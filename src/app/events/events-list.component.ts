import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { IEvent } from './events'



@Component({
  selector: 'event-list',
  templateUrl:'./events-list.component.html'
})
export class EventsListComponent implements OnInit,OnDestroy {
  events:IEvent[]=[];
  sub!:Subscription;
  selectedEvent!:IEvent | null;
  message:string='';
  constructor(private eventService: EventService,private router:Router){}
  ngOnDestroy(): void {
   this.sub.unsubscribe();}


  ngOnInit() {
    this.sub = this.eventService.getEvents().subscribe(
      resp=>{console.log(resp);
        this.events=resp;


      });

      this.eventService.selectedEventChanges$.subscribe(
        currentEvent=>this.selectedEvent=currentEvent
      );

  }

  onClick(eventName:any) {

    console.log('inclick first line',eventName);
   this.eventService.getEvent(eventName.id).subscribe(resp=>this.selectedEvent=resp);
   console.log('event retreived',this.selectedEvent)
  }

  newEvent():void{
    this.eventService.changeSelectedEvent(this.eventService.newEvent());

  }

 eventSelected(event:IEvent):void{
  this.eventService.changeSelectedEvent(event);
 }
}
