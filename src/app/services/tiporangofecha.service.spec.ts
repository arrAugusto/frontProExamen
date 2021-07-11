import { TestBed } from '@angular/core/testing';

import { TiporangofechaService } from './tiporangofecha.service';

describe('TiporangofechaService', () => {
  let service: TiporangofechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiporangofechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
