import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favorites: string[] = [];


  setFavorite(name: string) {
    if(!this.favorites.includes(name)){
      this.favorites.push(name);
    }
  }

  removeFriend(name: string) {
    this.favorites = this.favorites.filter(person => person !== name);
  }

}
