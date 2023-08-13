import { TestBed } from '@angular/core/testing';

import { PersonGeneratorService } from './person-generator.service';

describe('PersonGeneratorService', () => {
  let service: PersonGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
