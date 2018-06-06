import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-form',
    templateUrl: './chat-message-form.component.html',
    styleUrls: ['./chat-message-form.component.scss']
})
export class ChatMessageFormComponent {
    @Output() sendRequest: EventEmitter<string> = new EventEmitter<string>();
    public messageContent = '';

    public sendMessage(): void {
        this.sendRequest.emit(this.messageContent);
        this.messageContent = '';
    }
}