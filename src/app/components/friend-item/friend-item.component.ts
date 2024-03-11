import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css'],
})
export class FriendItemComponent {
  @Input({ required: true }) person!: string;
  @Output() addFavorite = new EventEmitter<string>();
  @Output() removeFavorite = new EventEmitter<string>();

  SaveToFavorite() {
    console.log('Logged in child: ', this.person);
    this.addFavorite.emit(this.person);
  }

  RemoveFromFavorite() {
    console.log('Logged in child: ', this.person);
    this.removeFavorite.emit(this.person);
  }
}
