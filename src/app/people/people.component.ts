import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  @Input() person: string | null = null;
  @Output() favoriteSignal: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeSignal: EventEmitter<string> = new EventEmitter<string>();

  emitFavoriteSignal(n: string) {
    this.favoriteSignal.emit(n);
  }

  emitRemoveSignal(n: string) {
    this.removeSignal.emit(n);
  }

}
