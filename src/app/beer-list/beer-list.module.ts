import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule } from '@angular/material';
import { RoutingModule } from '../routing.module';

import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        RoutingModule
    ],
    declarations: [BeerListComponent]
})
export class BeerListModule { }
