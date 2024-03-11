import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null; // Variable to store the name of a new friend
  favorite: string | null = null; // Variable to store the favorite person's name

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel']; // Array of people's names

  // Array to store favorite people
  fav: string[] = [];

  // Method to add a new friend to the list
  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  // Method to set a person as a favorite
  setFavorite(n: string){
    this.fav.push(n)
    this.favorite = this.fav.join(", ");
    console.log(this.fav)
  }

  // Method to check if a person is a favorite
  isFavourite(n: string){
    if (this.fav.indexOf(n) === -1){
      return false;
    }
    return true;
  }

  // Method to delete a favorite person
  deleteFavouritePerson(n: string) {
    const index = this.fav.indexOf(n);
    if (index !== -1) {
      this.fav.splice(index, 1);
      this.favorite = this.fav.join(", ");
    }
  }
}
