import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from '../../auth.service';
import { BeerComment } from '../../app.types';
import { Observable } from 'rxjs';
import { BeerCommentService } from '../beer-comment.service';

@Component({
    selector: 'app-beer-comment',
    templateUrl: './beer-comment.component.html',
    styleUrls: ['./beer-comment.component.css']
})
export class BeerCommentComponent implements OnChanges {
    @Input('beerId') beerId: string;
    public comments: Observable<BeerComment[]>;

    constructor (private beerCommentService: BeerCommentService, private authService: AuthService) {}

    ngOnChanges () {
        this.comments = this.beerCommentService.getComments(this.beerId);
    }

    public addComment (text: string): void {
        const user = this.authService.getUser();
        this.beerCommentService.addComment(this.beerId, user.uid, user.displayName, text);
    }

}
