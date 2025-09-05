import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person = input<string>('Friend');
  voted = output<string>();
  isFavourite = input<boolean>(false);
}
