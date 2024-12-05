import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() favorite: string | null = null;
  @Output() unfavoriteSignal: EventEmitter<string> = new EventEmitter<string>();

  emitUnfavoriteSignal(n: string) {
    this.unfavoriteSignal.emit(n);
  }
}
