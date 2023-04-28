import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/shared/services/pais/pais.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'app-pais-page',
  templateUrl: './pais-page.component.html',
  styleUrls: ['./pais-page.component.css']
})
export class PaisPageComponent implements OnInit {

  covidData: any;

  constructor(private paisservice : PaisService,
    private searchservice : SearchService){}


  ngOnInit(): void {
    this.paisservice.getSummary()
    .subscribe(
      (data: any) => {
        this.covidData = data;
      }
    );
  }
  searchCountry(country: string){
    const countries = this.covidData.Countries.filter(
      (c: any) => c.Country.toLowerCase().includes(country.toLowerCase())
    );
      this.searchservice.setCountries(countries);
  }
}
