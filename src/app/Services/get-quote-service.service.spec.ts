import { TestBed } from '@angular/core/testing';

import { GetQuoteServiceService } from './get-quote-service.service';

describe('GetQuoteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuoteServiceService = TestBed.get(GetQuoteServiceService);
    expect(service).toBeTruthy();
  });
});
