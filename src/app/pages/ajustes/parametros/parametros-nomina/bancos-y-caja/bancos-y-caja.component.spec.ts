import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosYCajaComponent } from './bancos-y-caja.component';

describe('BancosYCajaComponent', () => {
  let component: BancosYCajaComponent;
  let fixture: ComponentFixture<BancosYCajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosYCajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancosYCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
