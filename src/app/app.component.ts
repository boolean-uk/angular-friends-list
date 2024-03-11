import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favs: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFav(n:string) {
    if (this.favs.includes(n)) {
      this.favs.splice(this.favs.indexOf(n), 1);
    } else {
      this.favs.push(n);
    }
    this.favorite = this.favs.join(", ");
  }

  remPer(n:string) {
    this.people.splice(this.people.indexOf(n), 1);
    if (this.favs.includes(n)) {
      this.favs.splice(this.favs.indexOf(n), 1);
      this.favorite = this.favs.join(", ");
    }
  }
}
