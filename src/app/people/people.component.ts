import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('name') name: string = ''
  @Output('favorite') favorite = new EventEmitter<string>();
  @Output('unfavorite') unfavorite = new EventEmitter<string>();
}
