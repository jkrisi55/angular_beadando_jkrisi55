import { TestBed } from '@angular/core/testing';

import { Task5BSnackbarService } from './task5-b-snackbar.service';

describe('Task5BSnackbarService', () => {
  let service: Task5BSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task5BSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
