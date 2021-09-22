import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormaPagoComponent } from './crear-forma-pago.component';

describe('CrearFormaPagoComponent', () => {
  let component: CrearFormaPagoComponent;
  let fixture: ComponentFixture<CrearFormaPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFormaPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
