import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatMenuModule } from '@angular/material';

import { ChatComponent } from './chat.component';
import { Component, Input } from '@angular/core';
import { DialogflowService } from '../dialogflow.service';
import { AuthService } from '../../auth.service';
import { ObservableMedia } from '@angular/flex-layout';

@Component({ selector: 'app-chat-message-list', template: '' })
class AppChatMessageList {
    @Input('messages') messages;
}

@Component({ selector: 'app-chat-message-form', template: '' })
class AppChatMessageForm {}

const MockDialogflowService = jasmine.createSpyObj('MockDialogflowService', ['getResponse']);
const MockAuthService = jasmine.createSpyObj('MockAuthService', ['getUser']);
const MockObservableMedia = jasmine.createSpyObj('MockObservableMedia', ['isActive']);

describe('ChatComponent', () => {
    let component: ChatComponent;
    let fixture: ComponentFixture<ChatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatButtonModule, MatMenuModule],
            declarations: [ChatComponent, AppChatMessageList, AppChatMessageForm],
            providers: [{ 
                provide: DialogflowService,
                useValue: MockDialogflowService 
            }, { 
                provide: AuthService,
                useValue: MockAuthService 
            }, {
                provide: ObservableMedia,
                useValue: MockObservableMedia 
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});