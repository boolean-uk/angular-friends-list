import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css'],
})

export class FriendlistComponent {
  @Input('person') person: string = 'Tim'
  @Output('setFavorite') setFavorite = new EventEmitter<string>();
  @Output('removeFavorite') removeFavorite = new EventEmitter<string>();
}
