import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('person') person: string | null = null;
  @Output('selectFavorite') selectFavorite = new EventEmitter<string | null>();

  onClick() {
    this.selectFavorite.emit(this.person);
  }
}
