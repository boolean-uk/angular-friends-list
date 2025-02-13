import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-people",
    templateUrl: "./people.component.html",
    styleUrls: ["./people.component.css"],
})
export class PeopleComponent{
    @Input() name: string = '';
    @Output() addFavourite: EventEmitter<string> = new EventEmitter<string>();
    @Output() removeFromFavourite: EventEmitter<string> = new EventEmitter<string>();

    AddToFavourite(f: string){
        this.addFavourite.emit(f);
        console.log(f)
    }
    RemoveFavourite(f:string){
        this.removeFromFavourite.emit(f)
    }
}