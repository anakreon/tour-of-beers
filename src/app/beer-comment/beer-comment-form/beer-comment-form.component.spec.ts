import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCommentFormComponent } from './beer-comment-form.component';

describe('BeerCommentFormComponent', () => {
    let component: BeerCommentFormComponent;
    let fixture: ComponentFixture<BeerCommentFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerCommentFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerCommentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
