import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlatListComponent } from "../flats/flat-list.component";
import { EventDetailComponent } from "./event-detail.component";

describe('EventDetailComponent', () => {
    let component: EventDetailComponent;
    //declaration of element of the type HTMLElement
    let element:HTMLElement;
    let fixture: ComponentFixture<EventDetailComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ EventDetailComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(EventDetailComponent);
      component = fixture.componentInstance;
      //assignment
      element=fixture.nativeElement;
      fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
      });


      it('should correctly render the @Input value',()=>{
      component.event=
       {
        "id": 2,
         "name": "Angular Upgrades",
        "date": "3/24/2023",
        "time": "08:30 pm",
        "price": "1000.99",
        "imageUrl": "/assets/images/angularconnect-shield.png",
        "location":{
          "address": "1057  DT Street , ML Auditorium",
          "city": "Mumbai",
          "country": "India"
        },
        "sessions": [
          {
            "id": 1,
            "name": "Using Angular 4 Pipes",
            "presenter": "Peter  Darwin",
            "duration": 1,
            "level": "Intermediate",
            "abstract": "Learn angular pipes",
            "voters": [
                "bradgreen",
                 "igorminar",
                  "martinfowler"
                ]
            }]




      }

      let event1 =  component.event;

      fixture.detectChanges();
      let val = element.querySelector("#data")?.textContent;

      expect(val).toEqual(event1);



    }
      );


      it('should render@Input message correctly',()=>{

        //Arrange the test data
          let msg = " new message from parent";
          component.message=msg;

           fixture.detectChanges();

           //Act
          const value =element.querySelector('#messageDisplay')?.textContent;


          //Assert
          expect(value).toEqual(msg);

      })


}

);
