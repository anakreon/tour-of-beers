import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditImageComponent } from './beer-edit-image.component';

describe('BeerEditImageComponent', () => {
  let component: BeerEditImageComponent;
  let fixture: ComponentFixture<BeerEditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerEditImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
