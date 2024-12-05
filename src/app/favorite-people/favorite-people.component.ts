import { Component, EventEmitter, Input, Output } from '@angular/core';
import capitalizeName from '../utils/stringUtils';

@Component({
  selector: 'app-favorite-people',
  templateUrl: './favorite-people.component.html',
  styleUrls: ['./favorite-people.component.css']
})
export class FavoritePeopleComponent {
  @Input() person: string = ""
  @Output() removeFavorite: EventEmitter<string> = new EventEmitter<string>()

  signalFavoriteRemoval(n: string) {
    this.removeFavorite.emit(n)
  }

  capitalizeName = capitalizeName
}
