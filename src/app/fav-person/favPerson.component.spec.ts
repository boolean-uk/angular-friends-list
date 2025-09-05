import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPersonComponent } from './favPerson.component';

describe('FavPersonComponent', () => {
  let component: FavPersonComponent;
  let fixture: ComponentFixture<FavPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
