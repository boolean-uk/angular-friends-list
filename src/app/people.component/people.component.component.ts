import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-component',
  standalone: true,
  imports: [],
   template: `<p>{{ name }}</p>`,
  styleUrl: './people.component.component.css',
})
export class PeopleComponentComponent {
  @Input() name: string | null = null;

  setName(name: string) {
    this.name = name;
  }
}
