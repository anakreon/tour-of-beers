import { Component,  Input, ViewChild, OnChanges } from '@angular/core';
import { } from '@types/googlemaps';

interface GeolocationData {
    address: string;
    location: google.maps.LatLng;
};

@Component({
    selector: 'app-beer-detail-map',
    templateUrl: './beer-detail-map.component.html',
    styleUrls: ['./beer-detail-map.component.css']
})
export class BeerDetailMapComponent implements OnChanges {
    @Input() address: string;
    @ViewChild('gmap') gmapElement: any;
    public formattedAddress: string;

    ngOnChanges () {
        if (this.address) {
            this.getGeolocationData(this.address).then((geolocationData: GeolocationData) => {
                this.formattedAddress = geolocationData.address;
                this.initializeMap(geolocationData.location);
            });
        }
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
    private getGeolocationData (address: string): Promise<GeolocationData> {
        return new Promise((resolve, reject) => {
            new google.maps.Geocoder().geocode({ address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    resolve({
                        address: results[0].formatted_address,
                        location: results[0].geometry.location
                    });
                } else {
                    reject('Geocode was not successful for the following reason: ' + status);
                }
            });
        });
    }
}
