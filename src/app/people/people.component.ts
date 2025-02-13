import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  @Input() name: string = "";
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFav: EventEmitter<string> = new EventEmitter<string>();


  addToFav(b: string){
    this.addFav.emit(this.name);
  }

  removeFromFav(b: string){
    this.removeFav.emit(this.name);
  }
}
