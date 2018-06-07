import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCommentComponent } from './beer-comment.component';

describe('BeerCommentComponent', () => {
    let component: BeerCommentComponent;
    let fixture: ComponentFixture<BeerCommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerCommentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
