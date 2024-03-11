import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-people',
  templateUrl: './favorite-people.component.html',
  styleUrls: ['./favorite-people.component.css'],
})
export class FavoritePeopleComponent {
  @Input() favorite: string[] = [];
  @Input() person: string = '';
  @Output() favoriteChanged = new EventEmitter<string>();

  removeFavorite(person: string) {
    this.favoriteChanged.emit(person);
  }
}
