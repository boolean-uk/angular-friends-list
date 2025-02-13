
import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  //standalone: false,
  //imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {

  @Input() name: string = '';
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(b: string) {
    this.addFav.emit(b);
  }
  

}
