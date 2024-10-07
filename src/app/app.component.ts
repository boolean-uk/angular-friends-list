import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  //favorite: string | null = null;
  lastVoted: boolean = false;
  favorite: string[]=[];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];


  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFriend(stranger: string){
    if (!this.favorite.includes(stranger)){
      return;
    }

    this.favorite=this.favorite.filter ((person) => person!==stranger);
  }
  /*
  setFavourite(friend: string){
    this.favorite=friend
  }
    */

  //[lastVoted] = "person === favorite"

  addFavorite(friend: string){

    if (this.favorite.includes(friend)){
      return
    }
    console.log(this.favorite)
    this.favorite.push(friend);
  }
}
