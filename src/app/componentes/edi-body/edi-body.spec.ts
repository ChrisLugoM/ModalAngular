import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiBody } from './edi-body';

describe('EdiBody', () => {
  let component: EdiBody;
  let fixture: ComponentFixture<EdiBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiBody],
    }).compileComponents();

    fixture = TestBed.createComponent(EdiBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
