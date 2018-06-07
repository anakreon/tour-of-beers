import { Component, ViewChild, Input } from '@angular/core';
import { BeerComment } from '../../app.types';

@Component({
    selector: 'app-beer-comment-list',
    templateUrl: './beer-comment-list.component.html',
    styleUrls: ['./beer-comment-list.component.css']
})
export class BeerCommentListComponent {
    @Input('comments') comments: BeerComment[];
    
    /*public scrollDown () {
        this.chatlistElement.nativeElement.scrollTo({
            top: this.chatlistElement.nativeElement.scrollHeight
        });
    }*/
}