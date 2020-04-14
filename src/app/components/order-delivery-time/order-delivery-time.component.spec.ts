import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveryTimeComponent } from './order-delivery-time.component';

describe('OrderDeliveryTimeComponent', () => {
  let component: OrderDeliveryTimeComponent;
  let fixture: ComponentFixture<OrderDeliveryTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDeliveryTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
