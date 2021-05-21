import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss']
})
export class TrafficLightComponent implements OnInit {

  @Input() condition: boolean;
  @Input() label: string;
  
  constructor() { }

  ngOnInit(): void {
    console.log('TrafficLightComponent', this.label);
  }

}
