import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BeerStoreServiceService {
    public getBeers () {
        return of([{ 
            id: 1, name: 'Gambrinus originál 10°', ingredients: 'voda, ječné slady, chmelové produkty', alcohol: 4.3, epm: 10, 
            brewery: 'Pivovar Gambrinus Plzeň, U Prazdroje 7, Plzeň, 30497' 
        }, { 
            id: 2, name: 'Budweiser Budvar B:CLASSIC', ingredients: 'unknown', alcohol: 4.0, EPM: 10, 
            brewery: 'Budějovický budvar, Karoliny Světlé 512/4, České Budějovice, 37004'
        }, { 
            id: 3, name: 'Pilsner Urquell', ingredients: 'voda, ječné slady, chmelové produkty, kvasnice', alcohol: 4.4, epm: 11.8,
            brewery: 'Pivovar Plzeňský Prazdroj, U Prazdroje 7, Plzeň, 30497'
        }]);
    }
}
