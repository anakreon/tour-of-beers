import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { 
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatSliderModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
        AppMapComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
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
        MatProgressSpinnerModule,
        MatSliderModule
    ],
    providers: [],
    bootstrap: [ 
        AppComponent 
    ]
})
export class AppModule { }
