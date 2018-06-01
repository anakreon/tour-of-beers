import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatMessageItemComponent } from './app-chat-message-item.component';

describe('AppChatMessageItemComponent', () => {
    let component: AppChatMessageItemComponent;
    let fixture: ComponentFixture<AppChatMessageItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppChatMessageItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppChatMessageItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
