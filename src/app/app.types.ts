export interface BeerBase {
    id: string;
    name: string;
}

export interface Beer extends BeerBase {
    ingredients: string;
    abv: number;
    epm: number;
    style: string;
    description: string;
    brewery: string;
    pictureId: any;
}

export interface BeerRating {
    id?: string;
    beerId: string;
    userId: string;
    rating: number;
}

export interface BeerRatingResult {
    count: number;
    rating: number;
}

export interface BeerComment {
    id?: string;
    beerId: string;
    userId: string;
    userName: string;
    text: string;
    timestamp: number;
}