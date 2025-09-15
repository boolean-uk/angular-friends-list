import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {
  myPeople = input<string>('Rogue');
  voted = output<string>();
  deleted = output<string>();
  lastVoted = input<boolean>(false);
}
