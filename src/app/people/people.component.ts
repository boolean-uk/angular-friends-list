import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: string[] = [];

  @Output() favoriteSelected = new EventEmitter<string>();  

  selectFavorite(person: string) {
    this.favoriteSelected.emit(person);
  }
  removeFriend(person: string){
    let index = this.people.indexOf(person);
    this.people.splice(index, 1)
  }
}
