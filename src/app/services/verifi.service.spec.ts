import { TestBed } from '@angular/core/testing';

import { VerifiService } from './verifi.service';

describe('VerifiService', () => {
  let service: VerifiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
