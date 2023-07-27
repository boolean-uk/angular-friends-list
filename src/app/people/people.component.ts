import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  title = 'Friends list';
  items =[]

  @Input('friend') friend: { name: string} | null = null;
  @Output('addToFriendsList') addToFriendsList = new EventEmitter();
  clicked() {
    this.addToFriendsList.emit(this.friend);
  }
}

