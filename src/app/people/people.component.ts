import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  myPeople = input<string>("Name");
  favorites = output<string>();
  addFavourite = input<boolean>(false);
  removeFavourite = output<string>();
}
