import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../models/message';
import { DialogflowService } from '../dialogflow.service';
import { AuthService } from '../../auth.service';
import { ChatMessageListComponent } from '../chat-message-list/chat-message-list.component';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    @ViewChild('messageList') messageListElement: ChatMessageListComponent;
    public messages: Message[] = [];

    constructor (
        private dialogFlowService: DialogflowService, private authService: AuthService, 
        private observableMedia: ObservableMedia
    ) {}

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
        this.addMessage (text, userPhotoUrl, new Date());
    }
    private addBotMessage(text: string, date: Date): void {
        this.addMessage(text, 'assets/bot.png', date);
    }
    private addMessage(text: string, iconUrl: string, date: Date): void {
        const message = new Message(text, iconUrl, date);
        this.messages.push(message);
        this.scrollDown();
    }
    private scrollDown() {
        setTimeout(() => {
            this.messageListElement.scrollDown();
        });
    }

    public stopPropagation(event): void {
        event.stopPropagation();
    }

    public isSmallScreen (): boolean {
        return this.observableMedia.isActive('xs') || this.observableMedia.isActive('sm');
    }
}
