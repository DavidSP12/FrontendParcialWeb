import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaList } from './clinica-list';

describe('ClinicaList', () => {
  let component: ClinicaList;
  let fixture: ComponentFixture<ClinicaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
