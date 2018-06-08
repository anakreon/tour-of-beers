import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCommentComponent } from './beer-comment.component';
import { Component, Input } from '@angular/core';
import { BeerCommentService } from '../beer-comment.service';
import { AuthService } from '../../auth.service';

const MockBeerCommentService = jasmine.createSpyObj('MockBeerCommentService', ['getComments', 'addComment', 'deleteComment']);
const MockAuthService = jasmine.createSpyObj('MockAuthService', ['getUser', 'getUserId']);

@Component({selector: 'app-beer-comment-list', template: ''})
class AppBeerCommentListComponent {
    @Input('comments') comments;
    @Input('userId') userId;
}
@Component({selector: 'app-beer-comment-form', template: ''})
class AppBeerCommentFormComponent {}

describe('BeerCommentComponent', () => {
    let component: BeerCommentComponent;
    let fixture: ComponentFixture<BeerCommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerCommentComponent, AppBeerCommentListComponent, AppBeerCommentFormComponent],
            providers: [{ 
                provide: BeerCommentService,
                useValue: MockBeerCommentService
            }, { 
                provide: AuthService,
                useValue: MockAuthService
            }]
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
