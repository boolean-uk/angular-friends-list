import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('person') person: string = '';

  @Output('added') added = new EventEmitter<string>();

  @Output('removed') removed = new EventEmitter<string>();

  @Input('isFavourite') isFavourite: boolean = false;

  
  toggleFavourite() {
    if (this.isFavourite) {
      this.removed.emit(this.person);
    } else {
      this.added.emit(this.person);
    }
    this.isFavourite = !this.isFavourite;
  }
}
