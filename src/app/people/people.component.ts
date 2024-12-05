import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
@Input("personName") personName: string = ""
@Output("onMakeFavorite") onMakeFavorite: EventEmitter<string> = new EventEmitter<string>
@Output("onRemoveFavorite") onRemoveFavorite: EventEmitter<string> = new EventEmitter<string>

makeFavorite(): void {
  this.onMakeFavorite.emit(this.personName)
}

removeFavorite(): void {
  this.onRemoveFavorite.emit(this.personName)
}

}