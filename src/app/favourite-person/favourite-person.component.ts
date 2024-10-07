import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favourite-person',
  templateUrl: './favourite-person.component.html',
  styleUrl: './favourite-person.component.css'
})
export class FavouritePersonComponent {

  @Input ("name") name:string = ""
  @Output ("remove") remove = new EventEmitter<string>()
}
