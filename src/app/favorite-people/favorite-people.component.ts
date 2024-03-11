import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-people',
  templateUrl: './favorite-people.component.html',
  styleUrls: ['./favorite-people.component.css'],
})
export class FavoritePeopleComponent {
  @Input('favoriteValue') name: string = '';
}
