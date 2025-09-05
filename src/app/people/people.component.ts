import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() person!: string;
  @Output() favoriteSelected = new EventEmitter<string>();

  selectFavorite() {
    this.favoriteSelected.emit(this.person);
  }
}
