import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImHausListComponent } from './im-haus-liste.component';

describe('ImHausListComponent', () => {
  let component: ImHausListComponent;
  let fixture: ComponentFixture<ImHausListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImHausListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImHausListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
