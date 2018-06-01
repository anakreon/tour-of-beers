import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-list',
    templateUrl: './app-chat-message-list.component.html',
    styleUrls: ['./app-chat-message-list.component.scss']
})
export class AppChatMessageListComponent implements OnInit {

    @Input('messages')
    private messages: Message[];

    constructor() { }

    ngOnInit() {
    }


}