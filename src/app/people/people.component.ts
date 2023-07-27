import {Component, EventEmitter, Input, Output} from '@angular/core';
import Person, {createPerson} from "../../types/Person";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('person') person: Person = createPerson('');
  @Output('addFavorite') addFavorite = new EventEmitter<Person>();
  @Output('removeFavorite') removeFavorite = new EventEmitter<Person>();

  onClick() {
    if (this.person.isFav) {
      this.removeFavorite.emit(this.person);
    } else {
      this.addFavorite.emit(this.person);
    }
  }
}
