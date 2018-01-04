import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheaterMoviesComponent } from './in-theater-movies.component';

describe('InTheaterMoviesComponent', () => {
  let component: InTheaterMoviesComponent;
  let fixture: ComponentFixture<InTheaterMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheaterMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheaterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
