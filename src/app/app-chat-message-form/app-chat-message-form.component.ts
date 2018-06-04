import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-form',
    templateUrl: './app-chat-message-form.component.html',
    styleUrls: ['./app-chat-message-form.component.scss']
})
export class AppChatMessageFormComponent {
    @Output() sendRequest: EventEmitter<string> = new EventEmitter<string>();
    public messageContent = '';
    
    public sendMessage(): void {
        this.sendRequest.emit(this.messageContent);
        this.messageContent = '';
    }
}