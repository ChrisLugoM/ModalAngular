import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiGrid } from './edi-grid';

describe('EdiGrid', () => {
  let component: EdiGrid;
  let fixture: ComponentFixture<EdiGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(EdiGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
