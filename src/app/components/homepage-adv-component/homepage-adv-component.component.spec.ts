import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAdvComponentComponent } from './homepage-adv-component.component';

describe('HomepageAdvComponentComponent', () => {
  let component: HomepageAdvComponentComponent;
  let fixture: ComponentFixture<HomepageAdvComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageAdvComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageAdvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
