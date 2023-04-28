import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisPageComponent } from './components/pais-page/pais-page.component';

const routes: Routes = [
  { path : '', component: PaisPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
