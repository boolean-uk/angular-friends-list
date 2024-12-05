import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('people') people: string[] = [];
  @Input('person') person: string = '';
  @Output('favoriteSelected') favoriteSelected = new EventEmitter<string>();

  selectFavorite(person: string) {
    this.favoriteSelected.emit(person);
  }
}
