import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesBooksComponent } from './favourites-books.component';

describe('FavouritesBooksComponent', () => {
  let component: FavouritesBooksComponent;
  let fixture: ComponentFixture<FavouritesBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesBooksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
