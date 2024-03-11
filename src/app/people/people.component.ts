import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Input() person: string = "";
  // The line below export the data from the child to parent
  @Output() favPersonEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  // Declaring method
  addFavorite(p: string) {
    // This will emits the person p via. EventEmitter<string>
    this.favPersonEmitter.emit(p)
  }
}
