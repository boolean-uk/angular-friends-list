import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() personName: string = ''
  @Output() addFavorites: EventEmitter<string> = new EventEmitter<string>()
  @Output() removeFavorites: EventEmitter<string> = new EventEmitter<string>()

  onAddFavorites() {
    this.addFavorites.emit(this.personName)
  }

  onRemoveFavorites() {
    this.removeFavorites.emit(this.personName)
  }
}