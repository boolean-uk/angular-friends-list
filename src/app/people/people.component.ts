import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
   @Input('people') people: string | null = null;
   @Output('addToFavorite') addToFavorite = new EventEmitter();

  clicked() {
    this.addToFavorite.emit(this.people);
  }
}
