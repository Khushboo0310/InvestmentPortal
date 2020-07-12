import { TestBed } from '@angular/core/testing';

import { FindAgentServiceService } from './find-agent-service.service';

describe('FindAgentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindAgentServiceService = TestBed.get(FindAgentServiceService);
    expect(service).toBeTruthy();
  });
});
