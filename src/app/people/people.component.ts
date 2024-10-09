import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('name') name: string = '';
  @Output('favourite') favourite = new EventEmitter<string>();

  @Output('favouritepeople') favouritepeople = new EventEmitter<string[]>();
  
}
