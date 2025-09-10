import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {

  person = input<string>("Default")
  voted = output<string>()
}
