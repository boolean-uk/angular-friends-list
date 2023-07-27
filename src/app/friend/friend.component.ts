import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  @Input('friend') friend: string | null = null;
  @Input() favorite: string | null = null;
  @Output() addToFavorites = new EventEmitter<string>();

  isClicked = false;

  addToFavoritesClicked() {
    this.isClicked = !this.isClicked;
    if (this.friend) {
      this.addToFavorites.emit(this.friend);
    }
  }
}
