import { Component, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { BeerComment } from '../../app.types';

@Component({
    selector: 'app-beer-comment-list',
    templateUrl: './beer-comment-list.component.html',
    styleUrls: ['./beer-comment-list.component.css']
})
export class BeerCommentListComponent implements OnChanges {
    @Input('comments') comments: BeerComment[];
    @Input('userId') userId: String;
    @Output() deleteRequest: EventEmitter<string> = new EventEmitter<string>();

    public isCurrentUsersComment (comment: BeerComment) {
        return comment.userId === this.userId;
    }

    public deleteComment (comment: BeerComment): void {
        this.deleteRequest.emit(comment.id);
    }

    public ngOnChanges () {
        if (this.comments) {
            this.comments.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);
        }
    }
}