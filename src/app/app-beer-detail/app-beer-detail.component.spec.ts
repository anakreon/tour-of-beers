import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBeerDetailComponent } from './app-beer-detail.component';

describe('AppBeerDetailComponent', () => {
    let component: AppBeerDetailComponent;
    let fixture: ComponentFixture<AppBeerDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppBeerDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppBeerDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
