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

  addFav(person: string): void {
    console.log(person);
    if (this.favs.indexOf(person) === -1){
      this.favs.push(person);
    }
  }

  deleteFav(person: string): void {
    this.favs = this.favs.filter((p) => p !== person );
  }
  isInFav(person: string){
    if (this.favs.indexOf(person) === -1){
      return false;
    }
    return true;
  }
}
