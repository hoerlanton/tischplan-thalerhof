import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonnbergZirbnComponent } from './sonnberg-zirbn.component';

describe('SonnbergZirbnComponent', () => {
  let component: SonnbergZirbnComponent;
  let fixture: ComponentFixture<SonnbergZirbnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonnbergZirbnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonnbergZirbnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
