import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name:string = ""
  favorite:boolean=false;

  //Emitter contains the data
  @Output() toggleFavorite_:EventEmitter<PeopleComponent> = new EventEmitter<PeopleComponent>();
  toggleFavorite():void 
  {
    this.favorite = !this.favorite;
    this.toggleFavorite_.emit(this)
  }
}
