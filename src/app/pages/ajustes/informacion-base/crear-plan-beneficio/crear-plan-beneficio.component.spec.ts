import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanBeneficioComponent } from './crear-plan-beneficio.component';

describe('CrearPlanBeneficioComponent', () => {
  let component: CrearPlanBeneficioComponent;
  let fixture: ComponentFixture<CrearPlanBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlanBeneficioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
