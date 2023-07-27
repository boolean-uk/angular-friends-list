import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[] = [];
  favorites: Person[] = [];
  nextId = 0;

  onPersonCreated(personData: { name: string }) {
    const newPerson: Person = { id: this.nextId++, name: personData.name, isFavorite: false };
    this.people.push(newPerson);
  }

  onPersonSelected(person: Person) {
    this.favorites.push(person);
  }

  onPersonRemoved(person: Person) {
    const index = this.favorites.findIndex(fav => fav.id === person.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
