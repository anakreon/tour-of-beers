import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-beer-comment-form',
    templateUrl: './beer-comment-form.component.html',
    styleUrls: ['./beer-comment-form.component.css']
})
export class BeerCommentFormComponent {
    @Output() addRequest: EventEmitter<string> = new EventEmitter<string>();
    public commentText = '';

    public addComment(): void {
        this.addRequest.emit(this.commentText);
        this.commentText = '';
    }

}