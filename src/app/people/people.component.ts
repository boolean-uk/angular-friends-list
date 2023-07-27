import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: '../../../template/template.html',
  styleUrls: ['../../../template/template.css']
})
export class PeopleComponent {
  @Input() person: string | undefined = undefined;
  @Input() isFavorite: boolean = false;
  @Output() favoriteSelected: EventEmitter<string> = new EventEmitter<string>();


  setFavorite() {
    this.favoriteSelected.emit(this.person)
  }
}
