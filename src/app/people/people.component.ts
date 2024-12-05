import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class MyFriendsComponent {
  @Input('prs') person: string | null = null;
  @Output('addFavourite') addFavourite = new EventEmitter();
  @Output('removeFavourite') removeFavourite = new EventEmitter();

  clickedAdd() {
    this.addFavourite.emit(this.person);
  }

  clickedRemove() {
    this.removeFavourite.emit(this.person);
  }
}
