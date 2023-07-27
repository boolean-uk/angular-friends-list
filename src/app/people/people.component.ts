import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: Person | null = null;
  @Output('selectFavorite') selectFavorite = new EventEmitter();
  @Output('removeFriend') removeFriend = new EventEmitter<Person>();

  favoriteClicked(event: Event) {
    this.selectFavorite.emit(this.person);
  }

  removeClicked(event: Event) {
    if (this.person) {
      this.removeFriend.emit(this.person);
    }
  }
}
