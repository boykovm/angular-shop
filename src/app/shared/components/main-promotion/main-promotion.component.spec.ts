import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPromotionComponent } from './main-promotion.component';

describe('MainPromotionComponent', () => {
  let component: MainPromotionComponent;
  let fixture: ComponentFixture<MainPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
