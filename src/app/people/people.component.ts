import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('friend') friend: string | null = null;
  @Output('addToFriendsList') addFriend = new EventEmitter();
  clicked() {
    this.addFriend.emit(this.friend);
  }
}

