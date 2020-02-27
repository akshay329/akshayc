import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities:string[];
  togglelist:boolean;
  hastableclass:boolean;
  constructor() {
    this.togglelist=false;
  }
  ngOnInit(): void {
    this.cities=["pune","mumbai","kolkata","bangalore","hyderabad","chennai","delhi"]
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
  onsave(city){
    this.cities.push(city)
  }
  ondelete(cityy){
    let a=this.cities.indexOf(cityy)
    this.cities.splice(a,1)
  }
  deletefirst(){
    this.cities.shift()
  }
  deletelast(){
    this.cities.pop()
  }
  addfirst(city){
  this.cities.unshift(city)
  }
  onchange():void{
  this.hastableclass=!this.hastableclass;
  this.myclasses={
    "c1":false,
    "c2":true
  };
  }
  myclasses={
  "c1":true,
  "c2":false
  };
  }
