import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | undefined = undefined;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  @Output() friendAdded: EventEmitter<string> = new EventEmitter<string>();


  addFriend() {
    if (!this.newFriend) {
      return;
    }
    if (this.people.find((p: string) => p === this.newFriend)) {
      return;
    }

    this.people.push(this.newFriend);
    this.newFriend = undefined;
    this.friendAdded.emit(this.newFriend);

  }

  setFavourite(data: string) {
    if (this.favorite.findIndex((f: string) => f === data) === -1) {
      this.favorite.push(data);
    }
  }

  removeFromFavourite(data: string) {
    this.favorite = this.favorite.filter((f: string) => f !== data)
  }

  isFavourite(person: string): boolean {
    return !(this.favorite.findIndex((f: string) => f === person) === -1)
  }

}
