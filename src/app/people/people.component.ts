import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
    @Input() name : string | null = "";
    @Input() isFavorite : boolean = false;
    @Output() addFavorite : EventEmitter<string> = new EventEmitter<string>();
    @Output() removeFavorite : EventEmitter<string> = new EventEmitter<string>();

    toggleFavorite() {
        if (this.isFavorite) {
            this.removeFavorite.emit(this.name!);
        } else {
            this.addFavorite.emit(this.name!);
        }
    }

}