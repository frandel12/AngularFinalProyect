import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit, OnChanges {

  @Input() covidData:any;
  summaryData : any = {}
  constructor(){}

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.summaryData = this.covidData.Global;
  }

}
