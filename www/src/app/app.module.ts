import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialAllComponentsModule } from './angular-material-all.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormSandboxComponent } from './form-sandbox/form-sandbox.component';
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { PotatoComponent } from './potato/potato.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSandboxComponent,
    PotatoComponent,
    TrafficLightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAllComponentsModule,
    BrowserAnimationsModule,
    MaterialDesignFrameworkModule,
    NgxJsonViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PotatoComponent],
})
export class AppModule {}
