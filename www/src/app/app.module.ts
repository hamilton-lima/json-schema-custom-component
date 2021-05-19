import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialAllComponentsModule } from './angular-material-all.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormSandboxComponent } from './form-sandbox/form-sandbox.component';
import { MaterialDesignFrameworkModule } from '@ajsf/material';

@NgModule({
  declarations: [
    AppComponent,
    FormSandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAllComponentsModule,
    BrowserAnimationsModule,
    MaterialDesignFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
