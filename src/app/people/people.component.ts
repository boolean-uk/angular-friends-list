import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('personValue') name: string = '';
  @Output('newFavorite') favouriteName: any = new EventEmitter<string>();

  setFavourite(): void {
    this.favouriteName.emit(this.name);
  }
}
