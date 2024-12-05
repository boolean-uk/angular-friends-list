import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() name: string = "[no name]";
  @Input() favorites: string[] = [];
  @Output() delete = new EventEmitter<string>();

  onFavorite() : void {
    if (!this.favorites.includes(this.name)) this.favorites.push(this.name);
  }

  onUnfavorite() :void {
    if(this.favorites.includes(this.name)) this.favorites.splice(this.favorites.indexOf(this.name, 0), 1);
  }

  onDelete() :void {
    this.delete.emit(this.name);
  }
}
