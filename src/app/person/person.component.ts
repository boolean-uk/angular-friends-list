import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input("name") name: string = ""
  @Output("favorite") favorite = new EventEmitter<string>()
}
