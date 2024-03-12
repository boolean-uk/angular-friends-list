import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Input() isFavorite: boolean = false;
  @Output() favoriteClick = new EventEmitter<{person: string}>();

  handleFavorite() {
    this.favoriteClick.emit({ person: this.person! });
  }

}


