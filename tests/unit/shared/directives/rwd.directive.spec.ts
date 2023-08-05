import {ElementRef} from '@angular/core';
import {RwdDirective} from '../../../../src/app/shared/directives/rwd.directive';

describe('RwdDirective', () => {
    it('should add expected classes to element', () => {
        // Given I have an Element that I want to decorate
        let nativeElement: HTMLElement = document.createElement('div');
        const el = new ElementRef(nativeElement);

        // When I decorate
        new RwdDirective(el);

        // Then classes should be added
        const wanted = ['col-12', 'lg:col-8', 'xl:col-6'];

        wanted.forEach(function (className) {
            expect(nativeElement.classList.contains(className)).toBeTrue();
        });
    });
});
