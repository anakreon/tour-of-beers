import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat-message-item',
    templateUrl: './app-chat-message-item.component.html',
    styleUrls: ['./app-chat-message-item.component.scss']
})
export class AppChatMessageItemComponent implements OnInit {

    @Input('message')
    private message: Message;

    constructor() { }

    ngOnInit() {
    }

}