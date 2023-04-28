
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

import { HomeService } from 'src/app/shared/services/home/home.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit, OnChanges{

  @Input() country: string ='India';
  barChartData : ChartDataSets[] = [{
      data:[],
      label : 'Casos Confirmados'
    }];
  barChartLabels: Label []=[];
  barChartOptions: ChartOptions = {
    responsive : true
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private homeservice : HomeService){}

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.getCountryData();
  }
// Con este metedo sirve para pasar la informacion de los paises al chart
  getCountryData(){
    this.homeservice.getCountryDataByData(this.country, '2020-03-01T00:00:00Z&to=2022-01-01T00:00:00Z')
    .subscribe(
      (response : any) =>{
       this.barChartData[0].data = response.map((obj: any) => obj['Casos']);
       this.barChartLabels  = response.map((obj: any) => obj['Date'].substring(0, 10));

      }
    );
  }

}
