import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person:string;
  @Input() inFavoriteList: boolean;
  @Output() favorite = new EventEmitter();

  constructor(){
    this.person = ""
    this.inFavoriteList = false;
  }
}
