import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatMenuModule } from '@angular/material';

import { ChatComponent } from './chat/chat.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageItemComponent } from './chat-message-item/chat-message-item.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatMenuModule
    ],
    declarations: [ChatComponent, ChatMessageFormComponent, ChatMessageItemComponent, ChatMessageListComponent],
    exports: [ChatComponent]
})
export class ChatModule {}
