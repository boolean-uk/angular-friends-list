import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent {
  @Output() personCreated = new EventEmitter<{name: string}>();
  name: string = ''; // Declare the 'name' property here

  onAddPerson() {
    this.personCreated.emit({name: this.name});
    this.name = ''; // Reset the input field after the person is added
  }
}
