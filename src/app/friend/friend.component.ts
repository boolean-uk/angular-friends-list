import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  @Input('friend') friend: string = 'eve'; //passed in from parent app.component.ts
  @Output('chosen') chosen = new EventEmitter<string>();  //sending back to parent
  @Output('deleted') deleted = new EventEmitter<string>();
}
