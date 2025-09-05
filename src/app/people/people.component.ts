import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() delFav: EventEmitter<string> = new EventEmitter<string>();

  AddFavorite(p: string) {
    this.addFav.emit(p);
  }
  DeleteFavorite(p: string) {
    this.delFav.emit(p);
  }
}
