import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpTestingController , HttpClientTestingModule } from '@angular/common/http/testing'
import { TrusteeListComponent } from './trustee-list.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('TrusteeListComponent', () => {
  let component: TrusteeListComponent;
  let fixture: ComponentFixture<TrusteeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrusteeListComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusteeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
