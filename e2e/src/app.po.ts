import { browser, by, element } from 'protractor';

export class AppPage {
    navigateToDashboard () {
        return browser.get('/');
    }

    getDashboardTitleText () {
        return element(by.css('.sidenav-container .mat-toolbar .title')).getText();
    }
    getDashboardBestCardContent () {
        return element(by.css('.sidenav-container .beer-card-content'));
    }
    getDashboardCards () {
        return element(by.css('.sidenav-container .dashboard-card'));
    }    
}
