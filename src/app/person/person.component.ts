import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input('person') person: string = 'Rogue';
  @Output('voted') voted = new EventEmitter<string>();
  @Input('lastVoted') lastVoted: boolean = false;
}
