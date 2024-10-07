import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-people',
  templateUrl: './component-people.component.html',
  styleUrls: ['./component-people.component.css']
})
export class ComponentPeopleComponent {
  @Input() people: string[] = [];
  @Output() favoriteSelected = new EventEmitter<string>();

  selectFavorite(person: string) {
    this.favoriteSelected.emit(person);
  }
}
