import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavourite(name: string) {
    if(!this.favorite.includes(name)){
      this.favorite.push(name)
    }
    return;
  }

  removeFavourite(name: string) {
    if(this.favorite.includes(name)){
      this.favorite.splice(this.favorite.indexOf(name, 1))
    }
    return;

  }
  
}
