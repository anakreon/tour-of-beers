import { Component, Input, ViewChild } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-list',
    templateUrl: './app-chat-message-list.component.html',
    styleUrls: ['./app-chat-message-list.component.scss']
})
export class AppChatMessageListComponent {
    @ViewChild('chatlist') chatlistElement: any;

    @Input('messages')
    public messages: Message[];
    
    public scrollDown () {
        this.chatlistElement.nativeElement.scrollTo({
            top: this.chatlistElement.nativeElement.scrollHeight
        });
    }

}