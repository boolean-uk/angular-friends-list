import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
 @Input('person') person: string | null = null;
 @Output('favouritePerson') favouritePerson = new EventEmitter();

 clicked() {
  this.favouritePerson.emit(this.person);
}
}
