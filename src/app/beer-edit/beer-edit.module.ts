import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatButtonModule, MatInputModule } from '@angular/material';

import { BeerEditFormComponent } from './beer-edit-form/beer-edit-form.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
import { BeerEditImageComponent } from './beer-edit-image/beer-edit-image.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: [BeerEditFormComponent, BeerEditComponent, BeerEditImageComponent]
})
export class BeerEditModule { }
