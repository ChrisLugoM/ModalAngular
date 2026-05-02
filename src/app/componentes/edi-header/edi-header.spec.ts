import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiHeader } from './edi-header';

describe('EdiHeader', () => {
  let component: EdiHeader;
  let fixture: ComponentFixture<EdiHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(EdiHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
