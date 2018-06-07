import { BeerCommentModule } from './beer-comment.module';

describe('BeerCommentModule', () => {
    let beerCommentModule: BeerCommentModule;

    beforeEach(() => {
        beerCommentModule = new BeerCommentModule();
    });

    it('should create an instance', () => {
        expect(beerCommentModule).toBeTruthy();
    });
});
