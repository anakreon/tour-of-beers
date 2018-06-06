import { BeerRatingModule } from './beer-rating.module';

describe('BeerRatingModule', () => {
    let beerRatingModule: BeerRatingModule;

    beforeEach(() => {
        beerRatingModule = new BeerRatingModule();
    });

    it('should create an instance', () => {
        expect(beerRatingModule).toBeTruthy();
    });
});
