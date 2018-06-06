import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BeerListComponent } from './beer-list/beer-list/beer-list.component';
import { BeerDetailComponent } from './beer-detail/beer-detail/beer-detail.component';
import { BeerEditComponent } from './beer-edit/beer-edit/beer-edit.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'beers', component: BeerListComponent },
    { path: 'detail/:id', component: BeerDetailComponent },
    { path: 'edit/:id', component: BeerEditComponent, canActivate: [ AuthGuardService ] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule {}
