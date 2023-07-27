import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  template: `
    <div class="person">
      {{ personName }}
      <button (click)="setFavorite()">Set as favorite</button>
    </div>
  `,
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() personName: string = '';
  @Output() favoriteSelected = new EventEmitter<string>();

  setFavorite() {
    this.favoriteSelected.emit(this.personName);
  }
}