import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalesComponent } from './persons.component';

describe('ProfesionalesComponent', () => {
  let component: ProfesionalesComponent;
  let fixture: ComponentFixture<ProfesionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
