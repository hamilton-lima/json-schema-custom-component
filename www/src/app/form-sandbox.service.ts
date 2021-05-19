import { Injectable } from '@angular/core';
import { DEFAULT, POTATO } from './examples';

@Injectable({
  providedIn: 'root',
})
export class FormSandboxService {
  getDefault(): any {
    return POTATO;
  }

  constructor() {}
}
