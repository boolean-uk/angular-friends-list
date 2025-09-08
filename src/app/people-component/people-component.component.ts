import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people-component',
  standalone: false,
  templateUrl: './people-component.component.html',
  styleUrl: './people-component.component.css'
})
export class PeopleComponentComponent {

  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav : EventEmitter<string> = new EventEmitter<string>();

  addToFavs(p: string){
    this.addFav.emit(p);
  }

  deleteFromFavs(people: string) {
    this.deleteFav.emit(people);
  }
}
