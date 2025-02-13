import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = "";
  @Input() isFavorite: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();


  setFavorite(person: string){
    this.isFavorite = true;
    this.addFav.emit(person);
  }

}
