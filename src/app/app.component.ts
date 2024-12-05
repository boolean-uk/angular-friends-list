import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string = '';
  favorite: string ="";

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    this.people.push(this.newFriend);
    this.newFriend="";
  }

  favouritePerson(person: string) {
    this.favorite = person;
  }
}
