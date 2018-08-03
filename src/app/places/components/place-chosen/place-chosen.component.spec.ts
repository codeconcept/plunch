import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceChosenComponent } from './place-chosen.component';

describe('PlaceChosenComponent', () => {
  let component: PlaceChosenComponent;
  let fixture: ComponentFixture<PlaceChosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceChosenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
