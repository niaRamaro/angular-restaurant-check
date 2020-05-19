import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedDrinkItemComponent } from './ordered-drink-item.component';

describe('OrderedDrinkItemComponent', () => {
  let component: OrderedDrinkItemComponent;
  let fixture: ComponentFixture<OrderedDrinkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderedDrinkItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedDrinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
