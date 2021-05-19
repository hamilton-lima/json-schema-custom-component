import { JsonSchemaFormService } from '@ajsf/core';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { TileStyler } from '@angular/material/grid-list/tile-styler';

interface INotes {
  type: string;
  text: string;
}

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.scss'],
})
export class PotatoComponent implements OnInit {
  // copied from https://github.com/hamzahamidi/ajsf/blob/master/projects/ajsf-core/src/lib/widget-library/input.component.ts
  formControl: AbstractControl;
  controlName: string;
  controlValue: INotes[];
  controlDisabled = false;
  boundControl = false;
  options: any;
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  // auto created by JSF
  formArray: FormArray;

  constructor(
    private jsf: JsonSchemaFormService,
    private cdf: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);

    this.formArray = this.jsf.formGroup.get(this.controlName);

    // is a formControl created?
    const value = this.jsf.formGroup.get(this.controlName).value;
    console.log('created form control value', value);
    console.log('is this a form array?', this.formArray);
  }

  add() {
    const newLine = { type: 'foo', text: 'something else' };

    // pushes value
    this.controlValue.push(newLine);
    
    // // update the form array to add a new line
    const group = new FormGroup({
      type: new FormControl(newLine.type),
      text: new FormControl(newLine.text),
    });
    this.formArray.controls.push(group);
    this.formArray.markAsDirty();    

    // updates value
    this.jsf.updateValue(this, this.controlValue);
    console.log('form array after updates', this.formArray);

  }

  getValue() {
    return this.controlValue;
  }
}
