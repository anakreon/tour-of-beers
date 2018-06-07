import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    describe('dashboard', function () {
        beforeEach(function () {
            page.navigateToDashboard();
        });
        it('should display title', () => {
            expect(page.getDashboardTitleText()).toEqual('Tour of Beers');
        });
        /*it('should display the best card', () => {
            expect(page.getDashboardBestCardContent().isDisplayed()).toBeTruthy();
        });
        it('should display the other cards', () => {
            expect(page.getDashboardCards().getSize()).toBeGreaterThan(0);
        });*/
    });
});
