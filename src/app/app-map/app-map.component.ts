import { Component,  Input, ViewChild, OnChanges } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
    selector: 'app-map',
    templateUrl: './app-map.component.html',
    styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnChanges {
    @Input() address: string;
    @ViewChild('gmap') gmapElement: any;

    ngOnChanges () {
        this.geolocationServiceDecodeToLatLng(this.address)
            .then((position: google.maps.LatLng) => {
                this.initializeMap(position);
            });
    }

    private initializeMap (position: google.maps.LatLng): void {
        const mapOptions = this.buildMapOptions(position);
        const map = new google.maps.Map(this.gmapElement.nativeElement, mapOptions);
        const marker = new google.maps.Marker({ map, position });
    }

    private buildMapOptions (position: google.maps.LatLng): google.maps.MapOptions {
        return {
            center: {
                lat: position.lat(), 
                lng: position.lng()
            },
            mapTypeId: google.maps.MapTypeId.HYBRID,
            zoom: 12
        };
    }

    private geolocationServiceDecodeToLatLng (address: string): Promise<google.maps.LatLng> {
        return new Promise((resolve, reject) => {
            new google.maps.Geocoder().geocode({ address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    resolve(results[0].geometry.location);
                } else {
                    reject('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    }
}
