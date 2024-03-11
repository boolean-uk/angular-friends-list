import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  template: `
    <div>
      <p>{{ person }}</p>
      <button (click)="selectFavorite()">Favorite</button>
    </div>
  `,
  styles: []
})
export class PeopleComponent {
  @Input() person: string = 'Petros';
  @Output() favoriteSelected = new EventEmitter<string>();

  selectFavorite() {
    this.favoriteSelected.emit(this.person);
  }
}
