import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('people') person: string =""
  @Output() addToFavouritesEvent: EventEmitter<string> = new EventEmitter<string>()
    
  addToFavorites() {

    this.addToFavouritesEvent.emit(this.person)
  }
}
