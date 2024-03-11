import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  @Input('name') name:string|undefined;
  @Output('remove') removeName = new EventEmitter<string>();

  removeFav(n:string){
    this.removeName.emit(n);
  }
}
