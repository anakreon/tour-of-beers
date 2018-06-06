import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerEditFormComponent } from './beer-edit-form.component';

describe('BeerEditFormComponent', () => {
  let component: BeerEditFormComponent;
  let fixture: ComponentFixture<BeerEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
