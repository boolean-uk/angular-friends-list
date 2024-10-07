import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input('name') name: string = "default"

  @Output('favorited') favorited = new EventEmitter<string>
  @Output('unfavorited') unfavorited = new EventEmitter<string>
}
