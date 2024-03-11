import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Output() changeFavorite: EventEmitter<string> = new EventEmitter<string>();

  favoriteChange(n: string){
    this.changeFavorite.emit(n);
  }
}
