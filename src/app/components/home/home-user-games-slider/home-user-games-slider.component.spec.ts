import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserGamesSliderComponent } from './home-user-games-slider.component';

describe('HomeUserGamesSliderComponent', () => {
  let component: HomeUserGamesSliderComponent;
  let fixture: ComponentFixture<HomeUserGamesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserGamesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeUserGamesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
