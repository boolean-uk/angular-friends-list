import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() name: string | null = null;
  @Output() favoriteAdd: EventEmitter<string> = new EventEmitter<string>();

  addFavorite(name: string | null) {
    if (name) {
      this.favoriteAdd.emit(name);
    }
  }

}
