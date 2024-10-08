import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('people') people: string = "Robert Tables";
  @Output('voted') voted = new EventEmitter<string>();
  @Input('lastVoted') lastVoted: boolean = false;
  @Output('removed') removed = new EventEmitter<string>();
}
