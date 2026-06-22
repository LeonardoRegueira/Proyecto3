import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Completos } from './completos';

describe('Completos', () => {
  let component: Completos;
  let fixture: ComponentFixture<Completos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Completos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Completos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
