import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() person: string = '';
  @Output() isFavorite: EventEmitter<string> = new EventEmitter<string>();
  @Input() favorite: string | null = null;
}
