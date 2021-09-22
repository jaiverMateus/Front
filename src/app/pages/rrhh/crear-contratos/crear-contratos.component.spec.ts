import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContratosComponent } from './crear-contratos.component';

describe('CrearContratosComponent', () => {
  let component: CrearContratosComponent;
  let fixture: ComponentFixture<CrearContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
