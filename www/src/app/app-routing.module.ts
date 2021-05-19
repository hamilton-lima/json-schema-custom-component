import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSandboxComponent } from './form-sandbox/form-sandbox.component';

const routes: Routes = [
  { path: 'form', component: FormSandboxComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
