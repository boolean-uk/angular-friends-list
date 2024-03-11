import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  newFriend: string | null = null
  favorites: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel']

  addFriend() {
    if (!this.newFriend)
      return

    this.people.push(this.newFriend)
    this.newFriend = null
  }

  unfavoriteFriend(@Inject(String) name: string) {
    const _atIndex: number = this.favorites.findIndex((elm) => { return elm === name })
    if (_atIndex === -1) return
    this.favorites.splice(_atIndex, 1)
  }

  favoriteFriend(@Inject(String) name: string) {
    this.favorites.push(name)
  }

  isFavorite(@Inject(String) name: string) : boolean {
    return this.favorites.findIndex((elm) => { return elm === name }) >= 0
  }

  getPeopleString() : String {
    var _outString: String = ""

    for (const name of this.favorites) {
      _outString += name + ", "
    }

    return _outString
  }

  removeFriend(@Inject(String) name: string) {
    const _atIndex: number = this.people.findIndex((elm) => { return elm === name })
    if (_atIndex === -1) return
    this.people.splice(_atIndex, 1)
    this.unfavoriteFriend(name)
  }
}
