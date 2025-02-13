import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(p: string) {
    this.addFav.emit(p);
  }

  removeFromFavs(p: string) {
    this.removeFav.emit(p);
  }
}
