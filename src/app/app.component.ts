import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
removeFavorite(_t13: string) {
throw new Error('Method not implemented.');
}
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  selectAsFavourite(name: string) {
    if (!this.favorites.includes(name)){this.favorites.push(name);
    } 
  }

  removeFavoritePerson(person:string){
    this.favorites = this.favorites.filter((item: string) => item !== person);
    console.log(this.favorites);
  }
}
