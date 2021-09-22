import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearListaPreciosComponent } from './crear-lista-precios.component';

describe('CrearListaPreciosComponent', () => {
  let component: CrearListaPreciosComponent;
  let fixture: ComponentFixture<CrearListaPreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearListaPreciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearListaPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
