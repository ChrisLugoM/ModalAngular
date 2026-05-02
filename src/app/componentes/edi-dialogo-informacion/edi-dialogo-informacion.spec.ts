import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiDialogoInformacion } from './edi-dialogo-informacion';

describe('EdiDialogoInformacion', () => {
  let component: EdiDialogoInformacion;
  let fixture: ComponentFixture<EdiDialogoInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiDialogoInformacion],
    }).compileComponents();

    fixture = TestBed.createComponent(EdiDialogoInformacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
