import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-beer-edit-image',
    templateUrl: './beer-edit-image.component.html',
    styleUrls: ['./beer-edit-image.component.css']
})
export class BeerEditImageComponent {
    @Input() imageSrc: any;
}
