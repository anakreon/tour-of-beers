export interface BeerBase {
    id: string;
    name: string;
}

export interface Beer extends BeerBase {
    ingredients: string;
    abv: number;
    epm: number;
    brewery: string;
    pictureId: any;
}

export interface BeerRating {
    id?: string;
    beerId: string;
    userId: string;
    rating: number;
}