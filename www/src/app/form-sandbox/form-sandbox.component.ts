import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormSandboxService} from '../form-sandbox.service';

@Component({
  selector: 'app-form-sandbox',
  templateUrl: './form-sandbox.component.html',
  styleUrls: ['./form-sandbox.component.scss']
})
export class FormSandboxComponent implements OnInit {

  jsonSchema = null;
  jsonSchemaAsString = "";
  output = null;

  constructor(private service:FormSandboxService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.jsonSchema = this.service.getDefault();
    this.jsonSchemaAsString = JSON.stringify(this.jsonSchema);
    this.cdf.detectChanges();
  }

  onSubmit(event:any){
    console.log('onSubmit', event);
    this.output = JSON.stringify(event);
  }

}
