import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Output() addFavourite: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFavourite: EventEmitter<string> = new EventEmitter<string>();

  favourite(name: string) {
    this.addFavourite.emit(name);
  }

  unfavourite(name: string) {
    this.removeFavourite.emit(name);
  }
}
