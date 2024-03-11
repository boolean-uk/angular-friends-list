// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector for the component
  templateUrl: './app.component.html', // Path to the component's template
  styleUrls: ['./app.component.css'] // Path to the component's stylesheet (optional)
})

export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  favoritesTable: { name: string }[] = [];


  people: { name: string, isFavorite: boolean }[] = [
    { name: 'lewis', isFavorite: false },
    { name: 'jules', isFavorite: false },
    { name: 'ed', isFavorite: false },
    { name: 'nathan', isFavorite: false },
    { name: 'dave', isFavorite: false },
    { name: 'nigel', isFavorite: false }
  ];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push({ name: this.newFriend, isFavorite: false });
    this.newFriend = null;
  }

  toggleFavorite(person: { name: string, isFavorite: boolean }) {
    if (person.isFavorite) {
      this.favoritesTable.push({ name: person.name });
    } else {
      this.favoritesTable = this.favoritesTable.filter(fav => fav.name !== person.name);
    }
  }
  

  removeFavorite(person: { name: string, isFavorite: boolean }) {
    person.isFavorite = false;
    this.favorites = this.favorites.filter(name => name !== person.name);
  }
  
}

