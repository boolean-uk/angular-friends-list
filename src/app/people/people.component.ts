import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('name') name: string = ""
  @Output('chosen') chosen = new EventEmitter<string>();
  @Input('lastChosen') lastChosen: boolean = false;
}
