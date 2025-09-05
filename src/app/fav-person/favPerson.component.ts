
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favPerson',
  standalone: false,
  templateUrl: './favPerson.component.html',
  styleUrl: './favPerson.component.css'
})
export class FavPersonComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFriend: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(p: string) {
    this.addFav.emit(p);
  }
  deleteFromFavs(people: string) {
    this.deleteFav.emit(people);
  }
  deleteThisFriend(people: string) {
    this.deleteFriend.emit(people);
  }
}
