import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavUserComponent } from './app-nav-user.component';

describe('AppNavUserComponent', () => {
  let component: AppNavUserComponent;
  let fixture: ComponentFixture<AppNavUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
