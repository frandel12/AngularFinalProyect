import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmed-country',
  templateUrl: './confirmed-country.component.html',
  styleUrls: ['./confirmed-country.component.css']
})
export class ConfirmedCountryComponent implements OnInit{

  @Output() country = new EventEmitter<string>();
  constructor(){}
  
  ngOnInit(): void {
    
  }

  passCountryData(searchTerm:string){
    this.country.emit(searchTerm)
  }
}
