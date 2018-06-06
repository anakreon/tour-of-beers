import { BeerEditModule } from './beer-edit.module';

describe('BeerEditModule', () => {
  let beerEditModule: BeerEditModule;

  beforeEach(() => {
    beerEditModule = new BeerEditModule();
  });

  it('should create an instance', () => {
    expect(beerEditModule).toBeTruthy();
  });
});
