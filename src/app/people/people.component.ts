import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() person: string = "Jane Doe";

  @Output() isFavourite = new EventEmitter<string>()

  @Output() isNotFavourite = new EventEmitter<string>()

  @Input() lastFavourited: boolean = false;
}
