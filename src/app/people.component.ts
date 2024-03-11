import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  template: `
    <div *ngFor="let person of people">
      {{ person }}
      <button (click)="selectFavorite(person)">Set as Favorite</button>
    </div>
  `,
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Output() favoriteSelected = new EventEmitter<string>();

  selectFavorite(person: string) {
    this.favoriteSelected.emit(person);
  }
}
