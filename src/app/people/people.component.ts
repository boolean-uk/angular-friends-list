import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: string = '';
  @Output('selected') selected = new EventEmitter<string>();
  @Output('toRemove') toRemove = new EventEmitter<string>(); 

  @Input('addedAsFavorite') addedAsFavorite: boolean = false;
}
