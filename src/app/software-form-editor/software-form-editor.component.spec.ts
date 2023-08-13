import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFormEditorComponent } from './software-form-editor.component';

describe('SoftwareFormEditorComponent', () => {
  let component: SoftwareFormEditorComponent;
  let fixture: ComponentFixture<SoftwareFormEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareFormEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
