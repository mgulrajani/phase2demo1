import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrusteeComponent } from './edit-trustee.component';

describe('EditTrusteeComponent', () => {
  let component: EditTrusteeComponent;
  let fixture: ComponentFixture<EditTrusteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrusteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrusteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
