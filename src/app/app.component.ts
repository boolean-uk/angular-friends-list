import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favourites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addToFriends() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  addFavourite(name:string){
    console.log(name)
    if(this.favourites.indexOf(name)===-1){
      this.favorite=name //old redundancy for core, but did not remove 
      this.favourites?.push(name)
    }

  }
  removeFavourite(name :string){
   
    let i = this.favourites.indexOf(name)
    if(i>-1){
      this.favourites.splice(i,1);
    }


  }

}
