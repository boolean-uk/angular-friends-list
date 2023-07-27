import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-favs',
  templateUrl: './list-favs.component.html',
  styleUrls: ['./list-favs.component.css'],
})
export class ListFavsComponent {
  @Input('friend') friend: string | null = null;
  @Output('deleteFav') becomeFav = new EventEmitter();

  deleteFavButton() {
    this.becomeFav.emit(this.friend);
  }
}
