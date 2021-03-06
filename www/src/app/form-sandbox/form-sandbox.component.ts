import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormSandboxService } from '../form-sandbox.service';
import { JsonSchemaFormService, WidgetLibraryService } from '@ajsf/core';
import { PotatoComponent } from '../potato/potato.component';

@Component({
  selector: 'app-form-sandbox',
  templateUrl: './form-sandbox.component.html',
  styleUrls: ['./form-sandbox.component.scss'],
})
export class FormSandboxComponent implements OnInit {
  jsonSchema = null;
  jsonSchemaAsString = '';
  output = null;
  jsf: JsonSchemaFormService;

  constructor(
    private service: FormSandboxService,
    private cdf: ChangeDetectorRef,
    widgetLibrary: WidgetLibraryService,
    jsf: JsonSchemaFormService,
  ) {
    widgetLibrary.registerWidget('potato', PotatoComponent);
    this.jsf = jsf;
  }

  ngOnInit(): void {
    this.jsonSchema = this.service.getDefault();
    this.jsonSchemaAsString = JSON.stringify(this.jsonSchema);
    this.cdf.detectChanges();
  }

  onSubmit(event: any) {
    console.log('onSubmit', event);
    this.output = event;
  }

  log(label: string, event: any) {
    console.log('[log]', label, event);
  }
}
