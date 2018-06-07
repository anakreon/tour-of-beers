import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageListComponent } from './chat-message-list.component';
import { ChatMessageItemComponent } from '../chat-message-item/chat-message-item.component';

describe('ChatMessageListComponent', () => {
    let component: ChatMessageListComponent;
    let fixture: ComponentFixture<ChatMessageListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatMessageListComponent, ChatMessageItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatMessageListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
