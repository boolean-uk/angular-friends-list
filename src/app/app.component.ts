import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourite: string[]=[]

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  favouriteFriend(friend:string){
    if(this.favourite.includes(friend)){
      return;
    }
    this.favourite.push(friend)
  }

  removeFavouriteFriend(friend:string){
    if(!this.favourite.includes(friend)){
      return;
    }
    this.favourite.splice(this.favourite.indexOf(friend), 1)
  }
}
