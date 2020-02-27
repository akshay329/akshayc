import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  
  countries:string[];

  togglelist:boolean;

  constructor() {
    this.togglelist=false;
   }

  ngOnInit(): void {
    this.countries=["india","japan","china","america","portugal","spain","singapore"]
  }
  onshow():void{
    this.togglelist=true;
  }
  onhide():void{
    this.togglelist=false;
  }
  ontoggle():void{
    this.togglelist=!this.togglelist;
  }
  onsave(country){
    this.countries.push(country)
  }
  
  ondelete(countryy){
    let x=this.countries.indexOf(countryy)
    this.countries.splice(x,1)
  }
}
