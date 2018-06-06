import { Component, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-item',
    templateUrl: './chat-message-item.component.html',
    styleUrls: ['./chat-message-item.component.scss']
})
export class ChatMessageItemComponent {
    @Input('message')
    public message: Message;

}