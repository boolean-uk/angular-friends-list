import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friendlist',
  standalone: true,
  imports: [],
  templateUrl: './friendlist.component.html',
  styleUrl: './friendlist.component.css'
})
export class FriendlistComponent {
  @Input('person') person: string = 'Tim'

}
