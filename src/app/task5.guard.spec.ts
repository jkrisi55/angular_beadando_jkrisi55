import { TestBed } from '@angular/core/testing';

import { Task5Guard } from './task5.guard';

describe('Task5Guard', () => {
  let guard: Task5Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Task5Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
