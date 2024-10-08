import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  @Input('name') name: string = ""
  @Output('remove') remove = new EventEmitter<string>();
}
