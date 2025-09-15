import { Component, model } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  title: string = 'People Voting System';
  favourite: string[] = [];
  newPeople = model<string>("")


  people: string[] = [
    'Moueed',
    'Magnus',
    'Richard'
  ];

  addFavourite(fave: string) {
    this.favourite.push(fave);
  }
  removeFavourite(fav: string){
    const index = this.favourite.indexOf(fav)
    console.log(fav)
    console.log()
    if(index !== -1){
    this.favourite.splice(index, 1);
    }
  }
  
handleChange(item: string){
  if (this.favourite.includes(item)){
    this.favourite = this.favourite.filter(x => x !== item)
  }
}


  addPeople(): void {
    if (!this.newPeople) {
      return
    }
    this.people.push(this.newPeople())
    this.newPeople.set("")
  }

  removePeople(): void {
    if(!this.newPeople){
      return
    }
    const index = this.people.indexOf(this.newPeople());
    if(index !== -1){
    this.people.splice(index, 1);
    }
  }
}
