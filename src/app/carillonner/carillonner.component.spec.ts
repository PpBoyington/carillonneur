import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarillonnerComponent } from './carillonner.component';

describe('CarillonnerComponent', () => {
  let component: CarillonnerComponent;
  let fixture: ComponentFixture<CarillonnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarillonnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarillonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
