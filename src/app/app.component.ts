import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favouritePeople: string[] = []

  addFriend():void {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(name: string):void {
    if(!this.favouritePeople.includes(name)){
      this.favouritePeople.push(name)
    }
  }

  removeFavorite(name: string):void {
    this.favouritePeople.splice(this.favouritePeople.indexOf(name), 1);
  }
}
