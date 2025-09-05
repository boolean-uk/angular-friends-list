import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  myPerson = input<string>('')
  favorites = input<string>('')
  voted = output<string>()
  lastVoted = input<boolean>(false)
  remove = output<string>()
}
