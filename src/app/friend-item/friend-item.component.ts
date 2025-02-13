import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrl: './friend-item.component.css'
})
export class FriendItemComponent {
  @Input() showButton!: boolean;
  @Input() person!: string;
  @Output() addFavorite = new EventEmitter<string>();
}
