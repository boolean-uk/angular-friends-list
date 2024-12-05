import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() name!: string;
  @Output() toggleFavorite = new EventEmitter<string>();

  onToggleFavorite() {
    this.toggleFavorite.emit(this.name);
  }
}
