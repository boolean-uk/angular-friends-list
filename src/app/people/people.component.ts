import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']  // corrected
})
export class PeopleComponent {
  @Input() name: string = '';
  @Output() selectFavorite = new EventEmitter<string>();
  @Input() lastChosen: boolean = false;
}
