import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestacionesSocialesNominaComponent } from './prestaciones-sociales-nomina.component';

describe('PrestacionesSocialesNominaComponent', () => {
  let component: PrestacionesSocialesNominaComponent;
  let fixture: ComponentFixture<PrestacionesSocialesNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestacionesSocialesNominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestacionesSocialesNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
