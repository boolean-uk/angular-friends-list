import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  personFavourite(n: string) {
    if(!this.favorite.includes(n)){
      this.favorite.push(n);
    }
    else{
      this.favorite = this.favorite.filter(f => f != n)
    }
    console.log(this.favorite);
  }
}
