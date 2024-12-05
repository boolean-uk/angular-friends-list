import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  showButton = true;
  @Input('person') person: string | null = null;
  @Output('addToFav') addToFav = new EventEmitter();
  @Output('unfollow') unfollow = new EventEmitter();
  add() {
    this.showButton = false;
    this.addToFav.emit(this.person);
  }
  remove() {
    this.showButton = true;
    this.unfollow.emit(this.person);
  }
}
