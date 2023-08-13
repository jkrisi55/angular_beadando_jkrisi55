import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2ATdComponent } from './task2-a-td.component';

describe('Task2ATdComponent', () => {
  let component: Task2ATdComponent;
  let fixture: ComponentFixture<Task2ATdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2ATdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2ATdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
