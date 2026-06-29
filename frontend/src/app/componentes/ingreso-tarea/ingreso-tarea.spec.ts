import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoTarea } from './ingreso-tarea';

describe('IngresoTarea', () => {
  let component: IngresoTarea;
  let fixture: ComponentFixture<IngresoTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresoTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresoTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
