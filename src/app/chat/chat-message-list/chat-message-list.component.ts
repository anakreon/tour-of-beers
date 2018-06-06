import { Component, Input, ViewChild } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-list',
    templateUrl: './chat-message-list.component.html',
    styleUrls: ['./chat-message-list.component.css']
})
export class ChatMessageListComponent {
    @ViewChild('chatlist') chatlistElement: any;
    @Input('messages') messages: Message[];
    
    public scrollDown () {
        this.chatlistElement.nativeElement.scrollTo({
            top: this.chatlistElement.nativeElement.scrollHeight
        });
    }
}