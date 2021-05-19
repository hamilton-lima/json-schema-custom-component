import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly codeLocation =
    'https://github.com/hamilton-lima/json-schema-custom-component';

  constructor(private router: Router) {}

  code() {
    window.open(this.codeLocation, '_blank');
  }

  home() {
    this.router.navigate(['/home']);
  }
}
