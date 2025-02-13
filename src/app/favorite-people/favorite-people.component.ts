import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-people',
  templateUrl: './favorite-people.component.html',
  styleUrl: './favorite-people.component.css'
})
export class FavoritePeopleComponent {
  @Input() favoritePeople: string[] = [];
  @Output() removeFavoriteHandler = new EventEmitter<string>();
}
