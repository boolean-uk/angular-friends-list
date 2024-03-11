import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Input() isFavourite: boolean = false;
  @Output() toggleFavourite = new EventEmitter<{ person: string }>();

  handleFavouriteButtonClick() {
    this.toggleFavourite.emit({ person: this.person! });
  }
}
