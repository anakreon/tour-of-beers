import { Component, OnInit } from '@angular/core';

interface Image {
    src: string;
    header: string;
    text: string;
}

@Component({
    selector: 'app-beer-carousel',
    templateUrl: './app-beer-carousel.component.html',
    styleUrls: ['./app-beer-carousel.component.css']
})
export class AppBeerCarouselComponent implements OnInit {
    public images: Array<Image> = [{
        src: './assets/intro/1.jpg',
        header: '“He was a wise man who invented beer.”',
        text: '- Plato -'
    }, {
        src: './assets/intro/2.jpg',
        header: '“Beer, it’s the best damn drink in the world.”',
        text: '- Jack Nicholson -'
    }, {
        src: './assets/intro/3.jpg',
        header: '“I have respect for beer.”',
        text: '- Russell Crowe -'
    }, {
        src: './assets/intro/4.jpg',
        header: '“A man who lies about beer makes enemies.”',
        text: '- Stephen King -'
    }, {
        src: './assets/intro/5.jpg',
        header: '“For a quart of Ale is a dish for a king.”',
        text: '- William Shakespeare -'
    }, {
        src: './assets/intro/6.jpg',
        header: '“Beer’s intellectual. What a shame so many idiots drink it.”',
        text: '- Ray Bradbury -'
    }];

    constructor () {}

    ngOnInit () {}
}
