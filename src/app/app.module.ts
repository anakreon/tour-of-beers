import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { 
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressBarModule, MatSliderModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppBeersComponent } from './app-beers/app-beers.component';
import { AppBeerDetailComponent } from './app-beer-detail/app-beer-detail.component';
import { environment } from '../environments/environment';
import { AppBeerFormComponent } from './app-beer-form/app-beer-form.component';
import { AppBeerImageComponent } from './app-beer-image/app-beer-image.component';
import { AppBeerEditComponent } from './app-beer-edit/app-beer-edit.component';
import { AppNavUserComponent } from './app-nav-user/app-nav-user.component';
import { AppBeerAddCardComponent } from './app-beer-add-card/app-beer-add-card.component';
import { AppMapComponent } from './app-map/app-map.component';
import { AppBeerCarouselComponent } from './app-beer-carousel/app-beer-carousel.component';
import { AppBeerRatingViewComponent } from './app-beer-rating-view/app-beer-rating-view.component';
import { AppBeerRatingUserComponent } from './app-beer-rating-user/app-beer-rating-user.component';
import { AppDashboardCardComponent } from './app-dashboard-card/app-dashboard-card.component';
import { AppLoadingBarComponent } from './app-loading-bar/app-loading-bar.component';
import { AppChatMessageListComponent } from './app-chat-message-list/app-chat-message-list.component';
import { AppChatMessageItemComponent } from './app-chat-message-item/app-chat-message-item.component';
import { AppChatMessageFormComponent } from './app-chat-message-form/app-chat-message-form.component';
import { AppChatComponent } from './app-chat/app-chat.component';
import { AppDashboardCardBestComponent } from './app-dashboard-card-best/app-dashboard-card-best.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent,
        AppDashboardComponent,
        AppNavComponent,
        AppBeersComponent,
        AppBeerDetailComponent,
        AppBeerFormComponent,
        AppBeerImageComponent,
        AppBeerEditComponent,
        AppNavUserComponent,
        AppBeerAddCardComponent,
        AppMapComponent,
        AppBeerCarouselComponent,
        AppBeerRatingViewComponent,
        AppBeerRatingUserComponent,
        AppDashboardCardComponent,
        AppLoadingBarComponent,
        AppChatMessageListComponent,
        AppChatMessageItemComponent,
        AppChatMessageFormComponent,
        AppChatComponent,
        AppDashboardCardBestComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        LayoutModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressBarModule,
        MatSliderModule,
        NgbModule.forRoot(),
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }
