import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('name') name: string | null = null;
  @Output('selectFavorite') selectFavorite = new EventEmitter();

  clicked() {
    this.selectFavorite.emit(this.name);
  }
}
