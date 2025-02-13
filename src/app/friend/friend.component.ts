import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent {
    @Input() name: string = ""

    @Output() voted = new EventEmitter<string>();

    @Input() lastVoted: boolean = false;
}
