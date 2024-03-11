import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person:string;

  constructor(){
    this.person = ""
  }
  
  addFavorite(): void {
    console.log("Clicked");
  }
}
