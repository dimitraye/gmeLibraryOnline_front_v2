import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectedUserNavbarComponent } from './disconnected-user-navbar.component';

describe('DisconnectedUserNavbarComponent', () => {
  let component: DisconnectedUserNavbarComponent;
  let fixture: ComponentFixture<DisconnectedUserNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisconnectedUserNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisconnectedUserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
