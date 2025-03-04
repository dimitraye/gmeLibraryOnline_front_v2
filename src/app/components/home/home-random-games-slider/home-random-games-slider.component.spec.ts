import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRandomGamesSliderComponent } from './home-random-games-slider.component';

describe('HomeRandomGamesSliderComponent', () => {
  let component: HomeRandomGamesSliderComponent;
  let fixture: ComponentFixture<HomeRandomGamesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRandomGamesSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeRandomGamesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
