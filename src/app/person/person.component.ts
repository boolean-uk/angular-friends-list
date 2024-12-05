import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input()name: string = "";
  @Input()favoriteText: string = "favorite";
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() remPer: EventEmitter<string> = new EventEmitter<string>();
  addFavorite(n:string){
    if(this.favoriteText === "favorite"){
      this.favoriteText = "unfavorite"
    } else {
      this.favoriteText = "favorite"
    }
    this.addFav.emit(n)
  }

  removePerson(n:string){
    this.remPer.emit(n)
  }
}
