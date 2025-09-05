import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-people',
  // standalone: true,
  // imports: [],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  name = input<string>('');
  vote = output<string>();
  remove = output<string>();
  favorites = input<string[]>([]);

  
}
