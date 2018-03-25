import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningsComponent } from './planings.component';

describe('PlaningsComponent', () => {
  let component: PlaningsComponent;
  let fixture: ComponentFixture<PlaningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
