import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person!: string;
  @Output() favoriteEvent = new EventEmitter<string>();
  color: string = "green";

  switchFavorite() {
    this.favoriteEvent.emit(this.person);
  }
}
