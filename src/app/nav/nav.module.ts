import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { 
    MatCardModule, MatProgressBarModule, MatFormFieldModule, MatButtonModule, MatMenuModule, 
    MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatInputModule
} from '@angular/material';
import { RoutingModule } from '../routing.module';

import { NavComponent } from './nav/nav.component';
import { NavLoadingBarComponent } from './nav-loading-bar/nav-loading-bar.component';
import { NavUserCardComponent } from './nav-user-card/nav-user-card.component';
import { NavBeerAddCardComponent } from './nav-beer-add-card/nav-beer-add-card.component';
import { NavNotificationBarComponent } from './nav-notification-bar/nav-notification-bar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule, 
        MatProgressBarModule, 
        MatFormFieldModule, 
        MatButtonModule, 
        MatMenuModule, 
        MatSidenavModule,
        MatToolbarModule, 
        MatListModule, 
        MatIconModule,
        MatInputModule,
        LayoutModule,
        NgbModule,
        RoutingModule
    ],
    declarations: [NavComponent, NavLoadingBarComponent, NavUserCardComponent, NavBeerAddCardComponent, NavNotificationBarComponent],
    exports: [NavComponent]
})
export class NavModule {}
