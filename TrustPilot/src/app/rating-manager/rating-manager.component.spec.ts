import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingManagerComponent } from './rating-manager.component';

describe('RatingManagerComponent', () => {
  let component: RatingManagerComponent;
  let fixture: ComponentFixture<RatingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
