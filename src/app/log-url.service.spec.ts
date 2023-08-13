import { TestBed } from '@angular/core/testing';

import { LogUrlService } from './log-url.service';

describe('LogUrlService', () => {
  let service: LogUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
