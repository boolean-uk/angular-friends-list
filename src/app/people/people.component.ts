import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string = "";
  @Output() setFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFav: EventEmitter<string> = new EventEmitter<string>();

  setFavorite(n: string){
    this.setFav.emit(n)
  }

  removeFavorite(n: string){
    this.removeFav.emit(n)
  }
}
