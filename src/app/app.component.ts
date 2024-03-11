import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()newFriend: string | null = null;
 
  favorites: string[] =[];

  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    
    this.people.push(this.newFriend);
    
    console.log(this.people)
    this.newFriend = null;
  }

  setFavourite(n: string) {
    let element = this.favorites.filter(x=>x.includes(n))
    if(element.length!==0){
    }else{
      
    if(this.favorites.length >0){
      this.favorites.push(', '+n);
    }else{
      this.favorites.push(n);
    }
    }
  }

  removeName(n:string){
    this.favorites = this.favorites.filter(x=>!x.includes(n))

  }

}
