import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittertimelineComponent } from './twittertimeline.component';

describe('TwittertimelineComponent', () => {
  let component: TwittertimelineComponent;
  let fixture: ComponentFixture<TwittertimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwittertimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittertimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
