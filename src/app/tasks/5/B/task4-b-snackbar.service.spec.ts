/*
 * <<licensetext>>
 */

import { TestBed } from '@angular/core/testing';

import { Task4BSnackbarService } from './task4-b-snackbar.service';

describe('Task5BSnackbarService', () => {
  let service: Task4BSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Task4BSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
