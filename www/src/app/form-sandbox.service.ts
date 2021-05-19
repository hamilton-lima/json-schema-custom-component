import { Injectable } from '@angular/core';
import { DEFAULT } from './examples';

@Injectable({
  providedIn: 'root',
})
export class FormSandboxService {
  getDefault(): any {
    return DEFAULT;
  }

  constructor() {}
}
