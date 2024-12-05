import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: string = 'Numba1';
  @Output('voted') voted = new EventEmitter<string>();
  @Input('satFavourite') satFavourite: boolean = false;
}
