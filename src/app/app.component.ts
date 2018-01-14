import { Component } from '@angular/core';

@Component({//View buradan oluşturulur.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]//Sayfada bu sayfada 
})
export class AppComponent {
  title = 'NorthWind';
  public options = {
    position:["bottom","right"],
    timeOut:3000,
    lastOnBottom:true
  }
}
