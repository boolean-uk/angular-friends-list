import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string | null = null;
  @Output() favouriteSelected = new EventEmitter<string>();

  setFavourite() {
    if (this.name) {
      this.favouriteSelected.emit(this.name);
    }
    
  }
}
