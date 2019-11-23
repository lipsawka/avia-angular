import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTripComponent } from './dialog-trip.component';

describe('DialogTripComponent', () => {
  let component: DialogTripComponent;
  let fixture: ComponentFixture<DialogTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
