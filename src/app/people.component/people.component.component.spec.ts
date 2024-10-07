import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComponentComponent } from './people.component.component';

describe('PeopleComponentComponent', () => {
  let component: PeopleComponentComponent;
  let fixture: ComponentFixture<PeopleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
