import { TestBed } from '@angular/core/testing';

import { Company_N_Service } from './company_-n_.service';

describe('Company_N_Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Company_N_Service = TestBed.get(Company_N_Service);
    expect(service).toBeTruthy();
  });
});
