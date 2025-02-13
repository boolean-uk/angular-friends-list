import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() name!: string;
  @Input() isFavorite: boolean = false;
  @Output() favoriteToggled = new EventEmitter<string>();

  toggleFavorite() {
    this.favoriteToggled.emit(this.name);
  }
} 