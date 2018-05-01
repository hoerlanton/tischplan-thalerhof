import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeisesaalComponent } from './speisesaal.component';

describe('SpeisesaalComponent', () => {
  let component: SpeisesaalComponent;
  let fixture: ComponentFixture<SpeisesaalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeisesaalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeisesaalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
