import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() name: string | null = null;
  favorute: boolean = false;

  @Output() personFavourite: EventEmitter<string> = new EventEmitter<string>();

  favouritePerson(n: string) {
    this.personFavourite.emit(n);
    this.favorute = !this.favorute
  }
}