import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favouritePeople: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavourite2(friend: string){
    if(this.favouritePeople.includes(friend)){
      this.favouritePeople.splice(this.favouritePeople.indexOf(friend), 1);
    }
    else{
      this.favouritePeople.push(friend);
      console.log(this.favouritePeople)
    }
  }
}
