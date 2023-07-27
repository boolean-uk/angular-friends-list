import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('people') name: string | null = null;
  @Input('isFavourite') isFavourite: boolean = false
  @Output('favouriteSelected') setFavourite = new EventEmitter();
  @Output('removedFavourite') removeFavourite = new EventEmitter();

  // buttonClicked() {
  //   console.log("Favourite button clicked")
  //   this.setFavourite.emit(this.name)
  // }

  toggleFavourite() {
    if (this.isFavourite) {
      this.removeFavourite.emit(this.name)
      this.isFavourite = false
    }
    else {
      this.setFavourite.emit(this.name)
      this.isFavourite = true
    }
  }
}
