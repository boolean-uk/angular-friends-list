import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() personName!: string;
  @Output() favoriteToggled = new EventEmitter<string>(); // Rename event to favoriteToggled

  toggleFavorite() {
    this.favoriteToggled.emit(this.personName); // Emit event with personName
  }
}
