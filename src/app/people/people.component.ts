// people.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent {
  @Input() people: { name: string, isFavorite: boolean }[] = [];
  @Output() favoriteSelected = new EventEmitter<{ name: string, isFavorite: boolean }>();
  @Output() removeFavorite = new EventEmitter<{ name: string, isFavorite: boolean }>(); // Add this line

  selectFavorite(person: { name: string, isFavorite: boolean }) {
    person.isFavorite = !person.isFavorite;
    this.favoriteSelected.emit(person);
  }

  onRemoveFavorite(person: { name: string, isFavorite: boolean }) {
    this.removeFavorite.emit(person);
  }
}



