import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})

export class FavoriteComponent {
  @Input('favorite') favorite : string = ''
  @Output('removeFavorite') removeFavorite = new EventEmitter<string>();
}


