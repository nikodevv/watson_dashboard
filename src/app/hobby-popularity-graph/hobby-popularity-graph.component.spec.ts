import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyPopularityGraphComponent } from './hobby-popularity-graph.component';

describe('HobbyPopularityGraphComponent', () => {
  let component: HobbyPopularityGraphComponent;
  let fixture: ComponentFixture<HobbyPopularityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyPopularityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyPopularityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
