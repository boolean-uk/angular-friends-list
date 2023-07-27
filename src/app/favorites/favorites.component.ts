// src/app/favorites/favorites.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input() favorites: Person[] = [];
  @Output() personRemoved = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(person: Person) {
    this.personRemoved.emit(person);
  }
}
