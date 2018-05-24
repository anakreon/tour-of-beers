import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppBeersComponent } from './app-beers/app-beers.component';
import { AppBeerDetailComponent } from './app-beer-detail/app-beer-detail.component';
import { AppBeerAddComponent } from './app-beer-add/app-beer-add.component';
import { AppBeerEditComponent } from './app-beer-edit/app-beer-edit.component';

const routes: Routes = [
    { path: 'dashboard', component: AppDashboardComponent },
    { path: 'beers', component: AppBeersComponent },
    { path: 'detail/:id', component: AppBeerDetailComponent },
    { path: 'add', component: AppBeerAddComponent },
    { path: 'edit/:id', component: AppBeerEditComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
