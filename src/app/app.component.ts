import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favoritePeople: string[] = [];

  addFriend(friend: string) {
    this.favoritePeople.push(friend);
  }

  removeFriend(friend: string) {
    const ix = this.favoritePeople.indexOf(friend);
    if (ix !== -1) {
      this.favoritePeople.splice(ix, 1);
    }
  }

}
