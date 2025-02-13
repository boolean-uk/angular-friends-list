import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() person: string = "Name"

  @Output() selected = new EventEmitter<string>()

  @Input() lastSelected: boolean = false;
}
