import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioYSubsidioComponent } from './salario-y-subsidio.component';

describe('SalarioYSubsidioComponent', () => {
  let component: SalarioYSubsidioComponent;
  let fixture: ComponentFixture<SalarioYSubsidioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarioYSubsidioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarioYSubsidioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
