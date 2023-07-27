import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | undefined = undefined;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  @Output() friendAdded: EventEmitter<string> = new EventEmitter<string>();


  addFriend() {
    if (!this.newFriend) {
      return;
    }

    this.people.push(this.newFriend);
    this.newFriend = undefined;
    this.friendAdded.emit(this.newFriend);

  }

  setFavourite(data: string) {
    this.favorite = data;
  }
}
