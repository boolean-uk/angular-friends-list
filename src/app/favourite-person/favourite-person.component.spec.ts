import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePersonComponent } from './favourite-person.component';

describe('FavouritePersonComponent', () => {
  let component: FavouritePersonComponent;
  let fixture: ComponentFixture<FavouritePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouritePersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
