import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = '';
  @Output() favourite = new EventEmitter<string>()
  @Output() delete = new EventEmitter<string>()

}
