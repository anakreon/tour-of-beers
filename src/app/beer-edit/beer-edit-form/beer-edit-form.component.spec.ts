import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatButtonModule, MatInputModule } from '@angular/material';

import { BeerEditFormComponent } from './beer-edit-form.component';
import { Location } from '@angular/common';

const MockLocation = jasmine.createSpyObj('Location', ['back']);

describe('BeerEditFormComponent', () => {
    let component: BeerEditFormComponent;
    let fixture: ComponentFixture<BeerEditFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatButtonModule, FormsModule, 
                BrowserAnimationsModule
            ],
            declarations: [BeerEditFormComponent],
            providers: [{ 
                provide: Location,
                useValue: MockLocation
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerEditFormComponent);
        component = fixture.componentInstance;
        component.beer = <any>{};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
