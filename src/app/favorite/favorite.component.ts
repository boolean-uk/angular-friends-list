import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: false,
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  @Input() name!: string;
  @Output() removeFavorite = new EventEmitter<string>();

  handleClick() {
    this.removeFavorite.emit(this.name);
  }
}
