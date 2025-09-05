import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.html',
  styleUrl: './people.css'
})
export class People {
  myFave = input<string>('Isabell');
  voted = output<string>();
  lastVoted = input<boolean>(false);
}
