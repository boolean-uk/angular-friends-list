import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  template: `
    <div class="person">
      {{ person }}
      <button (click)="markAsFavorite()">Favorite</button>
      <button (click)="deleteAsFavorite()">Remove Favorite</button>
    </div>
  `,
  styles: [
    `
      .person {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class PeopleComponent {
  @Input() person: string = '';
  @Output() favoriteClicked = new EventEmitter<string>();
  @Output() removeFavoriteClicked = new EventEmitter<string>();

  markAsFavorite() {
    this.favoriteClicked.emit(this.person);
  }

  deleteAsFavorite() {
    this.removeFavoriteClicked.emit(this.person);
  }
}
