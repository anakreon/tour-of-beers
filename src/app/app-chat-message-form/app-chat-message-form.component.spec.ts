import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatMessageFormComponent } from './app-chat-message-form.component';

describe('AppChatMessageFormComponent', () => {
    let component: AppChatMessageFormComponent;
    let fixture: ComponentFixture<AppChatMessageFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppChatMessageFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppChatMessageFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
