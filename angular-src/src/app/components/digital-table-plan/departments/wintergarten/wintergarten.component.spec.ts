import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WintergartenComponent } from './wintergarten.component';

describe('WintergartenComponent', () => {
  let component: WintergartenComponent;
  let fixture: ComponentFixture<WintergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WintergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WintergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
