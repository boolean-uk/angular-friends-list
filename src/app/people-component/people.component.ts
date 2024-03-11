import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['../app-component/app.component.css'],
})
export class PeopleComponent {
  @Input() favorite: string[] = [];
  @Input() person: string = '';
  @Output() favoriteChanged = new EventEmitter<string>();

  setFavorite(person: string) {
    this.favoriteChanged.emit(person);
  }
}
