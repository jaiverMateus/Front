import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosConstitutivosComponent } from './ingresos-constitutivos.component';

describe('IngresosConstitutivosComponent', () => {
  let component: IngresosConstitutivosComponent;
  let fixture: ComponentFixture<IngresosConstitutivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosConstitutivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosConstitutivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
