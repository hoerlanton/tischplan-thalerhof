import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeinstubeComponent } from './weinstube.component';

describe('WeinstubeComponent', () => {
  let component: WeinstubeComponent;
  let fixture: ComponentFixture<WeinstubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeinstubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeinstubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
