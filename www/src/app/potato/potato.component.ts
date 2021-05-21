import { JsonSchemaFormService } from '@ajsf/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormSandboxService, INote } from '../form-sandbox.service';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.scss'],
})
export class PotatoComponent implements OnInit {
  /* 
   See 
   https://github.com/hamzahamidi/ajsf/blob/master
   projects/ajsf-core/src/lib/widget-library/input.component.ts
  */
  formControl: FormArray;
  controlName: string;
  controlValue: INote[];
  controlDisabled = false;
  boundControl = false;
  options: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(
    private jsf: JsonSchemaFormService,
    private service: FormSandboxService
  ) {}

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
    console.log('formArray initial state', this.formControl);
  }

  add() {
    const note = this.service.getRandomNote();

    // Update the form array new a new line
    const group = new FormGroup({
      type: new FormControl(note.type),
      text: new FormControl(note.text),
    });
    this.formControl.push(group);
    this.formControl.markAsDirty();

    console.log('formArray after updates', this.formControl);
  }
}
