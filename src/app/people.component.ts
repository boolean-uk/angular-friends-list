import { Component, EventEmitter, Output, Input } from "@angular/core";
@Component({
    selector: 'app-people',
    templateUrl: 'people.component.html'
})
export class PeopleComponent {
    @Input() people: string [] = []
    @Output() favoriteSelected = new EventEmitter<string>();

  
    selectAsFavorite(person: string) {
      this.favoriteSelected.emit(person);
    }

}