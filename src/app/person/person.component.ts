import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  @Input('person') person: string = 'Max';

  @Output('setAsFavorite') setAsFavorite = new EventEmitter<string>();

  @Output('removeAsFavorite') removeAsFavorite = new EventEmitter<string>();

  @Input('isFavorite') isFavorite: boolean = false;
}
