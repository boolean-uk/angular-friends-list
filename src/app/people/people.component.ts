import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('personValue') name: string = '';
  @Output('setFavorite') setFavorite: EventEmitter<string> =
    new EventEmitter<string>();
  @Output('setRemove') setRemove: EventEmitter<string> =
    new EventEmitter<string>();

  favorite(): void {
    this.setFavorite.emit(this.name);
  }

  remove(): void {
    this.setRemove.emit(this.name);
  }
}
