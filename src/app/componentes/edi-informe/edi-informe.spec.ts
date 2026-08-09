import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiInforme } from './edi-informe';

describe('EdiInforme', () => {
  let component: EdiInforme;
  let fixture: ComponentFixture<EdiInforme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiInforme],
    }).compileComponents();

    fixture = TestBed.createComponent(EdiInforme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
