import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
    selector: 'app-chat',
    templateUrl: './app-chat.component.html',
    styleUrls: ['./app-chat.component.css']
})
export class AppChatComponent implements OnInit {

    public message: Message;
    public messages: Message[];

    constructor() { 
        this.message = new Message('', 'assets/person.png');
        this.messages = [
            new Message('Welcome to Tour of Beers', 'assets/bot.png', new Date())
        ];
    }

    ngOnInit() {}

    public stopPropagation (event): void {
        event.stopPropagation();
    }

}
