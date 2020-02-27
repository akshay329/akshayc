
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  today:Date=new Date;
  flowers:string[]=["rose","jasmine","lily","lotus","chameli"];
  msg:string;
  age:number
}
