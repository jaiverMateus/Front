import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposNovedadComponent } from './tipos-novedad.component';

describe('TiposNovedadComponent', () => {
  let component: TiposNovedadComponent;
  let fixture: ComponentFixture<TiposNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposNovedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
