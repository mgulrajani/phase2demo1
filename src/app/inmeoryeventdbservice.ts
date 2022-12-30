import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { IEvent } from "src/app/events/events";
import { EventService } from "../../shared/event.service";
import { IProduct ,Category} from "./products/product";
@Injectable({providedIn:'root'})
export class InMemoryEventDbService
implements InMemoryDbService{

    createDb(){
     const events : IEvent[] = [
        {
            "id": 1,
             "name": "Angular Connect",
            "date": "3/24/2023",
            "time": "10:00 am",
            "price": 600.00,
            "imageUrl": "/assets/images/angularconnect-shield.png",
            "location": {
              "address": "1057  DT Street , ML Auditorium",
              "city": "Hamburg",
              "country": "Germany"
            },
            "sessions": [
              {
                "id": 1,
                "name": "Using Angular 4 Pipes",
                "presenter": "Peter Bacon Darwin",
                "duration": 1,
                "level": "Intermediate",
                "abstract": "Learn angular pipes",
                "voters": ["bradgreen", "igorminar", "martinfowler"]
              },
              {
                "id": 2,
                "name": "Getting the most out of your dev team",
                "presenter": "Jeff Cross",
                "duration": 1,
                "level": "Intermediate",
                "abstract": "some abstract notes",
                     "voters": ["johnpapa", "bradgreen", "igorminar", "martinfowler"]
              },
              {
                "id": 3,
                "name": "Angular 4 Performance Metrics",
                "presenter": "Rob Wormald",
                "duration": 1,
                "level": "Advanced",
                "abstract": "some note",
                "voters": []}

      ]},

      {
        "id": 2,
         "name": "Angular Upgrades",
        "date": "3/24/2023",
        "time": "08:30 pm",
        "price": 1000,
        "imageUrl": "/assets/images/angularconnect-shield.png",
        "location": {
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
            "voters": ["bradgreen", "igorminar", "martinfowler"]
          },
          {
            "id": 2,
            "name": "Getting the most out of your dev team",
            "presenter": "Jeff Cross",
            "duration": 1,
            "level": "Intermediate",
            "abstract": "some abstract notes",
                 "voters": ["johnpapa", "bradgreen", "igorminar", "martinfowler"]
          },
          {
            "id": 3,
            "name": " Performance Metrics",
            "presenter": "Rob Wormald",
            "duration": 1,
            "level": "Advanced",
            "abstract": "some note",
            "voters": []}

      ]}
      ,



      {
        "id": 3,
         "name": "Philosophy Behind Dependency Injection",
        "date": "4/24/2023",
        "time": "10:00 am",
        "price": 788,
        "imageUrl": "/assets/images/angularconnect-shield.png",
        "location": {
          "address": "1057  DT Street , ML Auditorium",
          "city": "Hamburg",
          "country": "Germany"
        },
        "sessions": [
          {
            "id": 1,
            "name": "Using Angular 4 Pipes",
            "presenter": "Peter Bacon Darwin",
            "duration": 1,
            "level": "Intermediate",
            "abstract": "Learn angular pipes",
            "voters": ["bradgreen", "igorminar", "martinfowler"]
          },
          {
            "id": 2,
            "name": "Getting the most out of your dev team",
            "presenter": "Jeff Cross",
            "duration": 1,
            "level": "Intermediate",
            "abstract": "some abstract notes",
                 "voters": ["johnpapa", "bradgreen", "igorminar", "martinfowler"]
          },
          {
            "id": 3,
            "name": "Angular 4 Performance Metrics",
            "presenter": "Rob Wormald",
            "duration": 1,
            "level": "Advanced",
            "abstract": "some note",
            "voters": []}

      ]},

      {
      "id": 2,
      "name": "Angular Routing",
      "date": "3/24/2023",
      "time": "08:30 pm",
      "price":566.99,
      "imageUrl": "/assets/images/angularconnect-shield.png",
      "location": {
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
        "voters": ["bradgreen", "igorminar", "martinfowler"]
      },
      {
        "id":1,
        "name": "Getting the most out of your dev team",
        "presenter": "Jeff Cross",
        "duration": 1,
        "level": "Intermediate",
        "abstract": "some abstract notes",
             "voters": ["johnpapa", "bradgreen", "igorminar", "martinfowler"]
      },
      {
        "id": 1,
        "name": " Performance Metrics",
        "presenter": "Rob Wormald",
        "duration":1,
        "level": "Advanced",
        "abstract": "some note",
        "voters": []}

      ]}


      ];

      const products:IProduct[]=[{

        "id":111,
        "name":"apples",
        "category":Category.fruits,

        "price":180,
        "image":"../../assets/images/apple.jpg",
        "rating":3.5,
        "qty":0

       },
      {

        "id":112,
        "name":"tomato",
        "category":Category.vegetables,

        "price":340,
        "image":"../../assets/images/tomato.jpg",
        "rating":2,
        "qty":0
    }];


    const trustees = [
      {


            "id": 1,
            "prefix": "Mr.",
            "firstName": "Charles",
            "middleName": "Edwards",
            "lastName": "Stewart",
            "shortName": "Charles Stewart",
            "ssn": "111222333",
            "gender": "Male",
            "countryOfResidence": "Australia",
            "passport": "H1234567",
            "countryOfIssuance": "Australia",
            "issuanceDate": "15-04-2010",
            "expirationDate": "15-04-2020",
            "noOfDependents": 2,
            "maritalStatus": "Married"
          },
          {
            "id": 2,
            "prefix": "Mrs.",
            "firstName": "Diana",
            "middleName": "Henryyy",
            "lastName": "Stewart",
            "shortName": "Diana Stewart",
            "ssn": "444555666",
            "gender": "Female",
            "countryOfResidence": "Australia",
            "passport": "M2231626",
            "countryOfIssuance": "Australia",
            "issuanceDate": "11-07-2012",
            "expirationDate": "11-07-2022",
            "noOfDependents": 1,
            "maritalStatus": "Married"
          },
          {
            "id": 3,
            "prefix": "Mr.",
            "firstName": "Phillip",
            "middleName": "Matt",
            "lastName": "Stewart",
            "shortName": "Phil Stewart",
            "ssn": "555666777",
            "gender": "Male",
            "maritalStatus": "Married",
            "countryOfResidence": "Australia",
            "passport": "H2345678",
            "countryOfIssuance": "Australia",
            "issuanceDate": "25-03-2010",
            "expirationDate": "25-03-2020",
            "noOfDependents": 3
          }


    ];

      return  {events,products,trustees};
    }}












