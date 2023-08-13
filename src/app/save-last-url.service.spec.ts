import { TestBed } from '@angular/core/testing';

import { SaveLastUrlService } from './save-last-url.service';

describe('SaveLastUrlService', () => {
  let service: SaveLastUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLastUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
