import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweethomeComponent } from './tweethome.component';

describe('TweethomeComponent', () => {
  let component: TweethomeComponent;
  let fixture: ComponentFixture<TweethomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweethomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweethomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
