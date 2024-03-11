import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
handleFavouriteClicked(personName: string) {
  this.favorite = personName;
  if(!this.favourites?.includes(personName)) {
    this.favourites?.push(personName)
    console.log("asdad")
  }

}

handleFavoriteRemove(personName: string) {
  if(this.favorite === personName) {
    this.favorite = "";
  }

  if(this.favourites.includes(personName)) {
    this.favourites = this.favourites.filter(fave => fave !== personName);
  }
}


  newFriend: string | null = null;
  favorite: string | null = null;

  favourites: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
