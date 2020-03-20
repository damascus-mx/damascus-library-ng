import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLogCardComponent } from './book-log-card.component';

describe('BookLogCardComponent', () => {
  let component: BookLogCardComponent;
  let fixture: ComponentFixture<BookLogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
