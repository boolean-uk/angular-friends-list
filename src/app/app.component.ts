import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string = '';
  favourite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    this.people.push(this.newFriend);
    this.newFriend="";
  }

  favouritePerson(person: string) {
    this.favourite.push(person);
  }

  removePerson(person: string){
    const index: number = this.favourite.indexOf(person);
    this.favourite.splice(index, 1);
    console.log(this.favourite);
  }
}
