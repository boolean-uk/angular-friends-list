import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent {
  @Input('friend') friend: string | null = null;
  @Output('becomeFav') becomeFav = new EventEmitter();

  becomeFavButton() {
    this.becomeFav.emit(this.friend);
  }
}
