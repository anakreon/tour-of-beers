import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCommentListComponent } from './beer-comment-list.component';

describe('BeerCommentListComponent', () => {
    let component: BeerCommentListComponent;
    let fixture: ComponentFixture<BeerCommentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerCommentListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerCommentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
