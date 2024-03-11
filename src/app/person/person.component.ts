import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: string | null = null;
  @Output() selectFavorite = new EventEmitter<string>();

  selectAsFavorite() {
    this.selectFavorite.emit(this.person!);
  }
}
