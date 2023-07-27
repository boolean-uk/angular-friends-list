import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  template: `
    <div class="person">
      {{ personName }}
      <button (click)="toggleFavorite()">
        {{ isFavorite ? 'Remove' : 'Set as favorite' }}
      </button>
    </div>
  `,
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() personName: string = '';
  @Input() isFavorite: boolean = false;
  @Output() favoriteSelected = new EventEmitter<string>();
  @Output() removeFavorite = new EventEmitter<string>();

  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFavorite.emit(this.personName);
    } else {
      this.favoriteSelected.emit(this.personName);
    }
  }
}