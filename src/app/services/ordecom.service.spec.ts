import { TestBed } from '@angular/core/testing';

import { OrdecomService } from './ordecom.service';

describe('OrdecomService', () => {
  let service: OrdecomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdecomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
