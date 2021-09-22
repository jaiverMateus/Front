import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNotaTecnicaComponent } from './crear-nota-tecnica.component';

describe('CrearNotaTecnicaComponent', () => {
  let component: CrearNotaTecnicaComponent;
  let fixture: ComponentFixture<CrearNotaTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNotaTecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNotaTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
