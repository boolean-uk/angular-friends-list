import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourites: string[] = []


  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];



  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFavourite(personName: string): void{
    const index: number = this.favourites.indexOf(personName);
    if(index !== -1){
      this.favourites.splice(index,1);
    }
    console.log(personName);
    console.log(this.favourites)
  }
  
  setFavourites(personName: string): void{
    this.favourites.push(personName)
    console.log(personName);
    console.log(this.favourites)
  }
}
