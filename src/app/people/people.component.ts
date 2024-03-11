import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  // Input property to receive the person's name from the parent component
  @Input() name: string = '';

  //// Output event to emit the selected favorite to the parent component
  @Output() favoriteSelected: EventEmitter<string> = new EventEmitter<string>();


  setFavorite(n: string) {
    this.favoriteSelected.emit(n) // Emitting the selected favorite to the parent component
    console.log(n)
  }
}
