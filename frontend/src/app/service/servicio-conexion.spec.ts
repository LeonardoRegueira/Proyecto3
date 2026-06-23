import { TestBed } from '@angular/core/testing';

import { ServicioConexion } from './servicio-conexion';

describe('ServicioConexion', () => {
  let service: ServicioConexion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioConexion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
