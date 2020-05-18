import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewievsComponent } from './rewievs.component';

describe('RewievsComponent', () => {
  let component: RewievsComponent;
  let fixture: ComponentFixture<RewievsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewievsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewievsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
