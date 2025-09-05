import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  // imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav: EventEmitter<string> = new EventEmitter<string>();

  addToFav(p: string) {
    this.addFav.emit(p)
  }

  deleteFromFav(p: string) {
    this.deleteFav.emit(p)
  }
}
