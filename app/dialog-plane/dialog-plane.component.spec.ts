import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlaneComponent } from './dialog-plane.component';

describe('DialogPlaneComponent', () => {
  let component: DialogPlaneComponent;
  let fixture: ComponentFixture<DialogPlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
