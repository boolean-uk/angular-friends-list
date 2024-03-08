import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() personName: string = '';
  @Output() favoriteSelected = new EventEmitter<string>();
  @Input() buttonText = '';

  setFavorite() {
    this.favoriteSelected.emit(this.personName);
  }
}
