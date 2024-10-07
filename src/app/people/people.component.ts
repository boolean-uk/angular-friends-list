import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('person') person: string = "Bobby Tables";

  @Output('voted') voted = new EventEmitter<string>();

  @Input('lastVoted') lastVoted: boolean = false;
}
