import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-person', templateUrl: './person.component.html', styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input('person') person: string = ''
  @Input('isFavourite') isFavourite: boolean = false
  @Output() favourite: EventEmitter<string> = new EventEmitter<string>();
  @Output() unfavourite: EventEmitter<string> = new EventEmitter<string>();


  chooseFavourite() {
    this.favourite.emit(this.person)
  }

  removeFavourite() {
    this.unfavourite.emit(this.person)
  }
}
