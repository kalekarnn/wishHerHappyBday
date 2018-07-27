import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyBdayComponent } from './happy-bday.component';

describe('HappyBdayComponent', () => {
  let component: HappyBdayComponent;
  let fixture: ComponentFixture<HappyBdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyBdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyBdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
