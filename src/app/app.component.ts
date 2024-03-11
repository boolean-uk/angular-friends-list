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

  setFavorite(person: string){
    this.favorite = person
  }
  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
