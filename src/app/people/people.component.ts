import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  person = input<string>("")
  voted = output<string>()
  remove = output<string>()
  lastVoted = input<boolean>(false)
}
