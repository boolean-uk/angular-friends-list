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

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  favoriteFriend(name: string) {
    this.favorite = name;
  }

  deleteFriend(name: string) {
    this.people.splice(this.people.indexOf(name, 0), 1);
    if(this.favorite===name) this.favorite = null;
  }
}
