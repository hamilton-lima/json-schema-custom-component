import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSandboxComponent } from './form-sandbox.component';

describe('FormSandboxComponent', () => {
  let component: FormSandboxComponent;
  let fixture: ComponentFixture<FormSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
