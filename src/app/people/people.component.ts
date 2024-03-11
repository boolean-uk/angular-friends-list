import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  newFriend: string | null = null;
  @Output('giveName') giveName = new EventEmitter<string>();
  addFriend() {
    if (this.newFriend) {
      this.giveName.emit(this.newFriend);
    }
  }
}
