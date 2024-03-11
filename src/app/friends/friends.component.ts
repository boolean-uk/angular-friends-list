import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  @Input('friend') friend: string = 'Hassan'; 
  @Output('favorite') favorite = new EventEmitter<string>();
  @Output('removeFavorite') removeFavorite = new EventEmitter<string>();


}
