import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

import { BeerCommentComponent } from './beer-comment/beer-comment.component';
import { BeerCommentListComponent } from './beer-comment-list/beer-comment-list.component';
import { BeerCommentFormComponent } from './beer-comment-form/beer-comment-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule
    ],
    declarations: [BeerCommentComponent, BeerCommentListComponent, BeerCommentFormComponent],
    exports: [BeerCommentComponent]
})
export class BeerCommentModule { }
