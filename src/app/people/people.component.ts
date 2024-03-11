import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() friend: string | null = null;
  @Output() votePeople: EventEmitter<string> = new EventEmitter<string>();

  peopleVote(p: string) {
    this.votePeople.emit(p)
  }
}
