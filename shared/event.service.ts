import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, BehaviorSubject } from "rxjs";
import { IEvent } from "src/app/events/events";

@Injectable({
    providedIn:'root'
})
export class EventService{
  //this is pointing to events array object in memory api
  
  private url="api/events/";
  private events:IEvent[]=[];
  private selectedEventSource = new BehaviorSubject<IEvent | null >(null);

  selectedEventChanges$=this.selectedEventSource.asObservable();

  changeSelectedEvent(selectedEvent :IEvent | null):void{
    this.selectedEventSource.next(selectedEvent);
  }


  newEvent():IEvent{
    return {
   id:0,
   name:'',
   date:'',
   time:'',
   price:0,
   imageUrl:'',
   sessions:[{
    id:1,
    name:'',
    presenter:'',
    duration:1,
   level:'1',
   voters:[],
   abstract:''
   }],
   location:{
    address:'',
    city:'',
    country:''
   }



    }}

  constructor(private http:HttpClient){}

  getEvents():Observable<IEvent[]>{
    return this.http.get<IEvent[]>(this.url).pipe(

        tap(data=>{console.log('in service getEvents',JSON.stringify(data));this.events=data;}),
        catchError(this.errorHandler)
    );

  }


  errorHandler=(error:any)=>{
  throw new Error(`some error ${JSON.stringify(error)}`);

  }

  getEvent(id:number):Observable<any>{
     console.log('getEventby id ',id);
 return this.http.get(`${this.url}${id}`)
  }


  createEvent(event:IEvent):Observable<IEvent>{

      const headers = new HttpHeaders({'Content-Type':'application/json'});

      const newEvent = {...event,id:null};
      return this.http.post<IEvent>(this.url,newEvent,{headers})
      .pipe(

    tap(data=>console.log('create event'+JSON.stringify(data))),
    tap(data=>{
      this.events.push(data);
    }),
    catchError(this.errorHandler)

      );


  }

  deleteEvent(id:number):Observable<{}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.url}/${id}`;
    return this.http.delete<IEvent>(url, { headers })
      .pipe(
        tap(data => console.log('delete event: ' + id)),
        tap(data => {
          const foundIndex = this.events.findIndex(item => item.id === id);
          if (foundIndex > -1) {
            this.events.splice(foundIndex, 1);
          }
        }),
        catchError(this.errorHandler)
      );
  }
  }


