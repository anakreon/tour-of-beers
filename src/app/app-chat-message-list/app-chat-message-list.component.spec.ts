import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatMessageListComponent } from './app-chat-message-list.component';

describe('AppChatMessageListComponent', () => {
    let component: AppChatMessageListComponent;
    let fixture: ComponentFixture<AppChatMessageListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppChatMessageListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppChatMessageListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
