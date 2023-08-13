import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3BSelectorComponent } from './task3-b-selector.component';

describe('Task3BSelectorComponent', () => {
  let component: Task3BSelectorComponent;
  let fixture: ComponentFixture<Task3BSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3BSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task3BSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
