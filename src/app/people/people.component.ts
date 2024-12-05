import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: string = '';

  @Output('favorite') favorite: EventEmitter<string> = new EventEmitter<string>();

  @Input('lastFavorite') lastFavorite: boolean = false;
  
  addFavorite() {
    this.favorite.emit(this.person);
  }

}
