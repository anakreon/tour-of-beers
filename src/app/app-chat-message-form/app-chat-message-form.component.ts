import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { DialogflowService } from '../dialogflow.service';

@Component({
    selector: 'app-chat-message-form',
    templateUrl: './app-chat-message-form.component.html',
    styleUrls: ['./app-chat-message-form.component.scss']
})
export class AppChatMessageFormComponent implements OnInit {
    @Input('message')
    private message: Message;

    @Input('messages')
    private messages: Message[];

    constructor (private dialogFlowService: DialogflowService) { }

    ngOnInit() {
    }


    public sendMessage(): void {
        this.message.timestamp = new Date();
        this.messages.push(this.message);

        this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
            this.messages.push(
                new Message((<any>res).result.fulfillment.speech, 'assets/bot.png', (<any>res).timestamp)
            );
        });

        this.message = new Message('', 'assets/person.png');
    }

}