import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = environment.apiUrl

  constructor( private http: HttpClient) { }
  getSummary(){
    return this.http.get(`${this.apiUrl}/summary`);
  }

  getCountryDataByData(country : string, date : string){
    return this.http.get(`${this.apiUrl}/total/country/${country}/status/confirmed?${date}`);
  }
}
