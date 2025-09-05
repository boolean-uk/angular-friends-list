import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  @Input() name!: string;
  @Output() setFavorite = new EventEmitter<string>();

  handleClick() {
    this.setFavorite.emit(this.name);
  }
}
