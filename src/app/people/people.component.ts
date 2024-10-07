import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('name') name:string = 'Hello?';
  @Output('addfavorite') addfavorite = new EventEmitter<string>();
  @Output('removefavorite') removefavorite = new EventEmitter<string>();
}
