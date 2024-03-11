import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() name: string = "";
  @Output('favourite') favourite = new EventEmitter<string>();
  @Output('unfavourite') unfavourite = new EventEmitter<string>();
  @Input('isFavourite') isFavourite: boolean = false;
}
