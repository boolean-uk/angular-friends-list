import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  setFavorite(person: string){
    this.favorites.push(person);    
  }
  removeFriend(person: string){
    this.favorites.filter((item)=>{
      item === person})
      const index: number = this.favorites.indexOf(person)
      if(index !== -1){
        this.favorites.splice(index,1)
      }
  }
  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
