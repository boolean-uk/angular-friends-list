import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [NgFor],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() favorite: string[] = [];
  @Input() people: string[] = [];
  @Output() favoriteChange = new EventEmitter<string[]>();

  setAsFavorite(name: string) {
    if (!this.favorite.includes(name)) {
      this.favoriteChange.emit([...this.favorite, name]);
    }
  }

  removeFromFavorite(name: string) {
    this.favorite = this.favorite.filter((person) => person !== name);
    this.favoriteChange.emit(this.favorite);
  }
}