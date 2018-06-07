import { Injectable } from '@angular/core';
import { Beer } from './app.types';
import { BeerStoreService } from './beer-store.service';

@Injectable({
    providedIn: 'root'
})
export class BeerDataService {
    constructor (private beerStoreService: BeerStoreService) {}

    public addDefaultBeers() {
        this.beerStoreService.addBeer(<Beer>{
            name: 'Pilsner Urquell',
            ingredients: 'water, barley malt, hops, yeast',
            abv: 4.4,
            epm: 11.8,
            style: 'Pilsner, Lager',
            description: 'Legendary lager from Pilsen. Founded in 1842. World’s first pilsner type blond lager.',
            brewery: 'Pilsner Urquell Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Budweiser Budvar B:CLASSIC',
            ingredients: 'unknown',
            abv: 4,
            epm: 10,
            style: 'Pale Lager',
            description: 'The original Budweiser or Budweiser Budvar pale lager. It has great raw materials and great brewers. They produce it in a slow and painstaking way.',
            brewery: 'Budweiser Budvar Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Gambrinus Excelent 11°',
            ingredients: 'water, barley malt, hops',
            abv: 4.7,
            epm: 11,
            style: 'Pale Lager',
            description: 'A unique triple hop process is used for the brewing. Excellent retains a large amount of flavorings, exudes fresh hops and full flavor.',
            brewery: 'Pilsner Urquell Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Staropramen Ležák',
            ingredients: 'water, hops, malt, maltose syrup',
            abv: 5,
            epm: 12,
            style: 'Pale Lager',
            description: 'Pale lager and flagship of the Staropramen brand.',
            brewery: 'Staropramen Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Velkopopovický Kozel 11',
            ingredients: 'water, barley malt, hops',
            abv: 4.6,
            epm: 11,
            style: 'Pale Lager',
            description: 'Thanks to three kinds of malt combined with fine bitterness of hops, Kozel gained many awards from prestigious domestic and foreign competitions.',
            brewery: 'Velkopopovický Kozel Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Svijanská Desítka',
            ingredients: 'water, malt, hops, sugar',
            abv: 4,
            epm: 10,
            style: 'Pale Draught Beer',
            description: 'One of the oldest Czech Breweries, established in 1564. Beer made in a Czech traditional way. Four times chopped. With added sugar.',
            brewery: 'Svijany Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Praga Premium Pils',
            ingredients: 'water, malt, hops, yeast',
            abv: 4.7,
            epm: 12,
            style: 'Czech Pilsener',
            description: 'Beer made in the Czech Republic. Supposedly "authentic", yet largely unknown to Czech people themselves.',
            brewery: 'Pivovar Samson'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Bernard 12',
            ingredients: 'water, self-produced barley malt, hops',
            abv: 4.9,
            epm: 12,
            style: 'Pale Lager',
            description: 'From a Czech family brewery, founded in 1597. Non-pasteurised lager beer.',
            brewery: 'Bernard Brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Březňák Světlé výčepní',
            ingredients: 'water, barley malt, hops',
            abv: 4.1,
            epm: 10,
            style: 'Pale Draught Beer',
            description: 'Brewery established in 1753. Typical for the portrait of Viktor Cibich on its etiquettes.',
            brewery: 'Velké Březno brewery'
        });

        this.beerStoreService.addBeer(<Beer>{
            name: 'Krušovické černé',
            ingredients: 'unknown',
            abv: 3.8,
            epm: 9.7,
            style: 'Dark Beer',
            description: 'Brewery established in 1581. Dark beer.',
            brewery: 'Royal Brewery of Krušovice'
        });
    }
}
