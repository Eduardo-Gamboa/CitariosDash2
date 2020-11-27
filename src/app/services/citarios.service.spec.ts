import { TestBed } from '@angular/core/testing';

import { CitariosService } from './citarios.service';

describe('CitariosService', () => {
  let service: CitariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
