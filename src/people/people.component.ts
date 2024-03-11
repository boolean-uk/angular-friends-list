import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('name') name:string|undefined
  @Output('favourite') sendFavourite = new EventEmitter<string>();

  setFav(n:string){
    this.sendFavourite.emit(n);
  }
}
