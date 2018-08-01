import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceaddContainerComponent } from './placeadd-container.component';

describe('PlaceaddContainerComponent', () => {
  let component: PlaceaddContainerComponent;
  let fixture: ComponentFixture<PlaceaddContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceaddContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceaddContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
