import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Input() isFavorite: boolean = false;
  
  @Output() selectFavorite = new EventEmitter<string | undefined>();
  @Output() removeFavorite = new EventEmitter<string | undefined>();

  selectPerson() {
    this.selectFavorite.emit(this.person ?? undefined);
  }

  removePerson() {
    this.removeFavorite.emit(this.person ?? undefined);
  }
}
