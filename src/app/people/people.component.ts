import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input("person")  person: string = "Noah";
  @Output('favorite') favorite = new EventEmitter<string>();
  
  @Input('lastFavorite') lastFavorite: boolean = false
}
