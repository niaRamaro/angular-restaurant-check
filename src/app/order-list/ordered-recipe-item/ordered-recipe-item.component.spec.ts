import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedRecipeItemComponent } from './ordered-recipe-item.component';

describe('OrderedRecipeItemComponent', () => {
  let component: OrderedRecipeItemComponent;
  let fixture: ComponentFixture<OrderedRecipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderedRecipeItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
