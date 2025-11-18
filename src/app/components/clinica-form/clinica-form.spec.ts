import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaForm } from './clinica-form';

describe('ClinicaForm', () => {
  let component: ClinicaForm;
  let fixture: ComponentFixture<ClinicaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
