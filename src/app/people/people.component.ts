import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @Input() people: Person[] = [];
  @Output() personSelected = new EventEmitter<Person>();
  @Output() personRemoved = new EventEmitter<Person>();

  ngOnInit() {
  }

  select(person: Person) {
    this.personSelected.emit(person);
  }
}
