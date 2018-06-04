import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../models/message';
import { DialogflowService } from '../dialogflow.service';
import { AuthService } from '../auth.service';
import { AppChatMessageListComponent } from '../app-chat-message-list/app-chat-message-list.component';

@Component({
    selector: 'app-chat',
    templateUrl: './app-chat.component.html',
    styleUrls: ['./app-chat.component.css']
})
export class AppChatComponent implements OnInit {
    @ViewChild('messageList') messageListElement: AppChatMessageListComponent;

    public messages: Message[] = [];

    constructor (private dialogFlowService: DialogflowService, private authService: AuthService) {}

    ngOnInit () {
        this.addBotMessage('Welcome to Tour of Beers', new Date());
    }

    public sendMessage (text: string): void {
        this.addUserMessage(text);
        this.dialogFlowService.getResponse(text).subscribe((res) => {
            this.addBotMessage((<any>res).result.fulfillment.speech, (<any>res).timestamp);
        });
    }
    private addUserMessage (text: string): void {
        const userPhotoUrl = this.authService.getUser().photoURL;
        this.addMessage(text, userPhotoUrl, new Date());
    }
    private addBotMessage (text: string, date: Date): void {
        this.addMessage(text, 'assets/bot.png', date);
    }
    private addMessage (text: string, iconUrl: string, date: Date): void {
        const message = new Message(text, iconUrl, );
        this.messages.push(message);
        this.scrollDown();
    }
    private scrollDown () {
        setTimeout(() => {
            this.messageListElement.scrollDown();
        });
    }    

    public stopPropagation (event): void {
        event.stopPropagation();
    }
}
