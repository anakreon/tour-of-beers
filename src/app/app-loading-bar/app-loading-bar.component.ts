import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './app-loading-bar.component.html',
    styleUrls: ['./app-loading-bar.component.css']
})
export class AppLoadingBarComponent {

    constructor (private loadingService: LoadingService) {}

    public shouldShowLoading (): boolean {
        return this.loadingService.shouldShowLoading();
    }

}
