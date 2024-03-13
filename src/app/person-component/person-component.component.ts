import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-component',
  templateUrl: './person-component.component.html',
  styleUrls: ['./person-component.component.css'],
})
export class PersonComponentComponent {
  @Input('personValue') name: string = '';

  @Output('favoritePerson') favoritePerson = new EventEmitter<string>();
  @Output('removePresonFromFavorites') removePresonFromFavorites =
    new EventEmitter<string>();
  addToFavorite() {
    this.favoritePerson.emit(this.name);
    this.containsName = true;
  }
  removeFromFavorites() {
    this.removePresonFromFavorites.emit(this.name);
    this.containsName = false;
  }
  containsName: boolean = false;
}
