import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOverTimeComponent } from './users-over-time.component';

describe('UsersOverTimeComponent', () => {
  let component: UsersOverTimeComponent;
  let fixture: ComponentFixture<UsersOverTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOverTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
