import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 powerlevel:number;
 mypowerlevel:number;

 mySubmit(){
   this.mypowerlevel = this.powerlevel;
 }
}
