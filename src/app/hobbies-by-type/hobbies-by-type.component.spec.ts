import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesByTypeComponent } from './hobbies-by-type.component';

describe('HobbiesByTypeComponent', () => {
  let component: HobbiesByTypeComponent;
  let fixture: ComponentFixture<HobbiesByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
