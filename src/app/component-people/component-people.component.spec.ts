import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentPeopleComponent } from './component-people.component';

describe('ComponentPeopleComponent', () => {
  let component: ComponentPeopleComponent;
  let fixture: ComponentFixture<ComponentPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentPeopleComponent] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
