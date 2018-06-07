import { TestBed, inject } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LoadingService]
        });
    });

    let service;
    beforeEach(inject([LoadingService], (loadingService: LoadingService) => {
        service = loadingService;
    }));
    describe('shouldShowLoading', function () {
        it('no loading', function () {
            expect(service.shouldShowLoading()).toBeFalsy();
        });
        it('set loading', function () {
            service.setLoading();
            expect(service.shouldShowLoading()).toBeTruthy();
        });
        it('set then unset loading', function () {
            const unsetLoading = service.setLoading();
            unsetLoading();
            expect(service.shouldShowLoading()).toBeFalsy();
        });
    });
    xdescribe('wrapWithLoading', function () {
        beforeEach(function () {
            jasmine.clock().install();
        });
        afterEach(function () {
            jasmine.clock().uninstall();
        });
        it('', function () {
            const promise = new Promise((resolve, reject) => {
                console.log('promising');
                window.setTimeout(() => {
                    console.log('resolving');
                    resolve();
                }, 100);
            });
            service.wrapWithLoading(promise);
            expect(service.shouldShowLoading()).toBeTruthy();
            jasmine.clock().tick(110);
            console.log('testing')
            expect(service.shouldShowLoading()).toBeFalsy();
        });
    });
    describe('setLoading', function () {
        it('', function () {
            service.setLoading();
            expect(service.shouldShowLoading()).toBeTruthy();
        });
        it('unsetLoading', function () {
            const unsetLoading = service.setLoading();
            unsetLoading();
            expect(service.shouldShowLoading()).toBeFalsy();
        });
    });
});
