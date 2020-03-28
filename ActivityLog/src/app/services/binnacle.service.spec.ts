import { TestBed } from '@angular/core/testing';

import { BinnacleService } from './binnacle.service';

describe('BinnacleService', () => {
  let service: BinnacleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinnacleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
