import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() person: string = "Wilmer";

  @Output() added = new EventEmitter<string>()

  @Output() removed = new EventEmitter<string>()

  @Input() isFavourite: boolean = false;
}
