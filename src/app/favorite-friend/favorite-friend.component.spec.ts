import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteFriendComponent } from './favorite-friend.component';

describe('FavoriteFriendComponent', () => {
  let component: FavoriteFriendComponent;
  let fixture: ComponentFixture<FavoriteFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteFriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
