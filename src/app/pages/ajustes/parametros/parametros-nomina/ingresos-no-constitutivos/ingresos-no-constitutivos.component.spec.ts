import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosNoConstitutivosComponent } from './ingresos-no-constitutivos.component';

describe('IngresosNoConstitutivosComponent', () => {
  let component: IngresosNoConstitutivosComponent;
  let fixture: ComponentFixture<IngresosNoConstitutivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosNoConstitutivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosNoConstitutivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
