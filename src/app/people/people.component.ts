import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('peopleData') people: string | undefined = undefined;
  @Output('onFavorite') onFavorite: EventEmitter<string> =
    new EventEmitter<string>();

  @Output('onRemove') onRemove: EventEmitter<string> =
    new EventEmitter<string>();

  favorite(): void {
    console.log('Emitting onFavorite event for people: ', this.people);
    this.onFavorite.emit(this.people);
  }

  remove(): void {
    console.log('Emitting onRemove event for people: ', this.people);
    this.onRemove.emit(this.people);
  }
}
