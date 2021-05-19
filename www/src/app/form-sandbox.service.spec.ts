import { TestBed } from '@angular/core/testing';

import { FormSandboxService } from './form-sandbox.service';

describe('FormSandboxService', () => {
  let service: FormSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
