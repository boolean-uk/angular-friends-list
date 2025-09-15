import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {
   fav = input<string>('Mueed');
   changed = output<string>()
}





