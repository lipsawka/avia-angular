import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFlightComponent } from './dialog-flight.component';

describe('DialogFlightComponent', () => {
  let component: DialogFlightComponent;
  let fixture: ComponentFixture<DialogFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
