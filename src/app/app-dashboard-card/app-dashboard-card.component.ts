import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './app-dashboard-card.component.html',
    styleUrls: ['./app-dashboard-card.component.css']
})
export class AppDashboardCardComponent implements OnInit {

    @Input() beer = {
        ingredients: 'xxx',
        abv: 1,
        epm: 2,
        brewery: 'asfd'
    }

    constructor() { }

    ngOnInit() {
    }

}
