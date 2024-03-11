import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: string | null = null;
  @Input() isFavorite: boolean = false;
  @Output() favoriteChange = new EventEmitter<{
    person: string;
    isFavorite: boolean;
  }>();

  selectAsFavorite() {
    console.log('Favorite button clicked');
    if (this.person) {
      this.favoriteChange.emit({
        person: this.person,
        isFavorite: !this.isFavorite,
      });
    }
  }
}
