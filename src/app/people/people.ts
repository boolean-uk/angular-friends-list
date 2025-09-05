import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styleUrl: './people.css'
})
export class PeopleComponent {
  @Input() name: string = '';
  @Output() setAsFavourite = new EventEmitter<string>();
  @Output() addToFavourites = new EventEmitter<string>();

  onSetAsFavourite() {
    this.setAsFavourite.emit(this.name);
  }

  onAddToFavourites() {
    this.addToFavourites.emit(this.name);
  }
}
