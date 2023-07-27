import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: string | null = null;
  @Output('addToFav') addToFav = new EventEmitter();
  @Output('unfollow') unfollow = new EventEmitter();
  add() {
    this.addToFav.emit(this.person);
  }
  remove() {
    this.unfollow.emit(this.person);
  }
}
