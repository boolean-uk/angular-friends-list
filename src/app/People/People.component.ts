import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './People.component.html',
  styleUrl: './People.component.css'
})
  export class PeopleComponent {
    @Input() people: string[] = [];
    @Output('favorite') favorite = new EventEmitter<string>();

    selectFavorite(person: string){
        this.favorite.emit(person)
    }
}