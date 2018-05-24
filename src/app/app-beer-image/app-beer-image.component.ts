import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-beer-image',
    templateUrl: './app-beer-image.component.html',
    styleUrls: ['./app-beer-image.component.css']
})
export class AppBeerImageComponent {
    @Input() imageSrc: any;

}
