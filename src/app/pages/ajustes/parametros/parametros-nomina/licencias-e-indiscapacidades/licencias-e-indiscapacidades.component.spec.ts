import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasEIndiscapacidadesComponent } from './licencias-e-indiscapacidades.component';

describe('LicenciasEIndiscapacidadesComponent', () => {
  let component: LicenciasEIndiscapacidadesComponent;
  let fixture: ComponentFixture<LicenciasEIndiscapacidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciasEIndiscapacidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciasEIndiscapacidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
