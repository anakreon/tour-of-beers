import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { BeerDetailModule } from './beer-detail/beer-detail.module';
import { BeerEditModule } from './beer-edit/beer-edit.module';
import { BeerListModule } from './beer-list/beer-list.module';
import { ChatModule } from './chat/chat.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavModule } from './nav/nav.module';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RoutingModule,
        BeerDetailModule,
        BeerEditModule,
        BeerListModule,
        ChatModule,
        DashboardModule,
        NavModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }
