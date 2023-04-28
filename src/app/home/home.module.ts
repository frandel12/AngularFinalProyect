import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { ConfirmedCountryComponent } from './components/confirmed-country/confirmed-country.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { CountryChartComponent } from './components/country-chart/country-chart.component';







@NgModule({
  declarations: [
    HomePageComponent,
    HomeCardComponent,
    TopCountriesComponent,
    ConfirmedCountryComponent,
    CountryChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class HomeModule { }
