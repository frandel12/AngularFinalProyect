import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/home/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  covidData: any = {};
  countryToSearch: string = '';
  constructor(private homeservice: HomeService) {}
  
  ngOnInit(): void {
    this.homeservice.getSummary()
      .subscribe(
        (data: any) => {
          this.covidData = data;
        }
      );
  }

  searchCountry(searchTerm: string){
    this.countryToSearch = searchTerm;
  }
}
