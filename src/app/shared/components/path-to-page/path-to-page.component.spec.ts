import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathToPageComponent } from './path-to-page.component';

describe('PathToPageComponent', () => {
  let component: PathToPageComponent;
  let fixture: ComponentFixture<PathToPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathToPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathToPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
