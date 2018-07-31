import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacelistContainerComponent } from './placelist-container.component';

describe('PlacelistContainerComponent', () => {
  let component: PlacelistContainerComponent;
  let fixture: ComponentFixture<PlacelistContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacelistContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacelistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
