import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisRoutingModule } from './pais-routing.module';
import { PaisPageComponent } from './components/pais-page/pais-page.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  declarations: [
    PaisPageComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    SharedModule
  ]
})
export class PaisModule { }
