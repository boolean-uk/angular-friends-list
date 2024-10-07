import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input('person') person: string = 'Max';

  @Output('voted') voted = new EventEmitter<string>();

  @Input('lastVoted') lastVoted: boolean = false;
}
