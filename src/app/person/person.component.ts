import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() name: string | undefined = "[no name]"
  @Output() setAsFavorite = new EventEmitter<string>();

  onFavorite() : void {
    this.setAsFavorite.emit(this.name);
  }
}
