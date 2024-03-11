import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [NgFor],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() friends: string[] = [];
  @Output() votePeople: EventEmitter<string> = new EventEmitter<string>();

  peopleVote(friend: string) {
    this.votePeople.emit(friend)
  }
}
