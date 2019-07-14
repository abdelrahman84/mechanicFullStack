import { TestBed } from '@angular/core/testing';

import { JwtAPIService } from './jwt-api.service';

describe('JwtAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtAPIService = TestBed.get(JwtAPIService);
    expect(service).toBeTruthy();
  });
});
