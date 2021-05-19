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

@NgModule({
  declarations: [AppComponent, FormSandboxComponent, PotatoComponent],
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
})
export class AppModule {}
