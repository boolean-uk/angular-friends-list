import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('personValue') name: string = '';
  @Output('newFavorite') favouriteName: any = new EventEmitter<string>();
  @Output('removeFavorite') removeFavorite: any = new EventEmitter<string>();
  show: boolean = true;

  setFavourite(): void {
    this.favouriteName.emit(this.name);
    this.show = false;
  }

  unsetFavourite(): void {
    this.removeFavorite.emit(this.name);
    this.show = true;
  }
}
