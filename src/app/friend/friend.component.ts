import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent {
  @Input('people') people: string = "test";

  @Input('isFavorite') isFavorite: boolean = false;

  @Output('addToFavorite') addToFavorite = new EventEmitter<string>();

  @Output('removeFromFavorite') removeFromFavorite = new EventEmitter<string>();
}
