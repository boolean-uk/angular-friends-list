import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-friend',
  templateUrl: './favorite-friend.component.html',
  styleUrl: './favorite-friend.component.css'
})
export class FavoriteFriendComponent {
  @Input() favorite!: string;
  @Output() removeFavorite = new EventEmitter<string>();
}
