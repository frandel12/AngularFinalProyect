import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy{
  @Input() covidData: any;
  countries: any [] = [];

  subcription = new Subscription();
  
  constructor(private searchservice: SearchService){}

  ngOnInit(): void {
    this.subcription = this.searchservice.getCountries()
    .subscribe(
      (data : any) => {
        this.countries = data;
      }
    )
  }

  ngOnChanges(): void {
    this.countries = this.covidData?.Countries;
  
  }


  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  

}
