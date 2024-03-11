import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() person: string | null;
  @Output() favoritePerson: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFromFavoritesPerson: EventEmitter<string> = new EventEmitter<string>();

  favoritePersonAdd(person: string){
    this.favoritePerson.emit(person)
  }

  favoritePersonRemove(person: string) {
    this.removeFromFavoritesPerson.emit(person)
  }
}
