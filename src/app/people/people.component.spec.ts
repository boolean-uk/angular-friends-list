import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleComponent]
    });
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit favoriteSelected event when selectFavorite() is called', () => {
    const person = 'John';
    let emittedPerson: string | undefined;
    component.person = person;
    component.favoriteSelected.subscribe((selectedPerson: string) => {
      emittedPerson = selectedPerson;
    });
    component.selectFavorite();
    expect(emittedPerson).toEqual(person);
  });
});
