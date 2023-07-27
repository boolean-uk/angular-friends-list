import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('name') name: string | null = null;
  @Output('removeFavorite') removeFavorite = new EventEmitter();

  clicked() {
    this.removeFavorite.emit(this.name);
  }
}
