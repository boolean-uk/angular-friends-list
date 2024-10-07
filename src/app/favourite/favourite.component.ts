import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css',
})
export class FavouriteComponent {
  @Input('favourite') favourite: string = "";

  @Output('remove') remove = new EventEmitter<string>();
}
