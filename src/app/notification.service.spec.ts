import { TestBed, inject } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NotificationService]
        });
    });
    let service;
    beforeEach(inject([NotificationService], (notificationService: NotificationService) => {
        service = notificationService;
    }));
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    describe('showTemporaryAlert', function () {
        it('', function () {
            jasmine.clock().install();
            const message = 'some message';
            service.showTemporaryAlert(message);
            expect(service.getAlertMessage()).toBe(message);
            jasmine.clock().tick(100);
            expect(service.getAlertMessage()).toBe('');
            jasmine.clock().uninstall();
        });
    });
    describe('getAlertMessage', function () {
        it('', function () {
            const message = 'some message';
            service.showAlert(message);
            expect(service.getAlertMessage()).toBe(message);
        });
    });
    describe('showAlert', function () {
        it('', function () {
            const message = 'some message';
            const hideAlert = service.showAlert(message);
            expect(service.getAlertMessage()).toBe(message);
            hideAlert();
            expect(service.getAlertMessage()).toBe('');
        });
    });
});
