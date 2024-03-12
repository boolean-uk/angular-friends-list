import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Output() makeFavorite = new EventEmitter<string>();

  favorite(p: string) {
    this.makeFavorite.emit(p);
  }
}
