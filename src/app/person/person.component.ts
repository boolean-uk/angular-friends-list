import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() name: string | null = null;
  @Output() addToFavorites: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFromFavorites: EventEmitter<string> = new EventEmitter<string>();

  addFavorite() {
    if (!this.name) {
      return;
    }
    this.addToFavorites.emit(this.name);
  }

  removeFavorite() {
    if (!this.name) {
      return;
    }
    this.removeFromFavorites.emit(this.name);
  }
}
