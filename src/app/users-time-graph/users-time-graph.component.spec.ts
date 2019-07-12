import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTimeGraphComponent } from './users-time-graph.component';

describe('UsersTimeGraphComponent', () => {
  let component: UsersTimeGraphComponent;
  let fixture: ComponentFixture<UsersTimeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTimeGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTimeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
