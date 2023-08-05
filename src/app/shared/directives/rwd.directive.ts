import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appRwd]'
})
export class RwdDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.classList.add('col-12', 'lg:col-8',  'xl:col-6');
    }
}
