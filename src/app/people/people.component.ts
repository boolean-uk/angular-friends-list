import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: string | null = null;
  @Output('addToFavourite') addToFavourite = new EventEmitter();

  clicked() {
    this.addToFavourite.emit(this.person);
  }
}
