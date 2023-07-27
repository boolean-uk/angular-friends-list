import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() name : String = '';
  @Output() clicked = new EventEmitter();

  isFavorite = false;

  markAsFavorite() {
    this.isFavorite = true;
    this.clicked.emit(this.name);
  }

  unmarkAsFavorite() {
    this.isFavorite = false;
    this.clicked.emit(this.name);
  }
}