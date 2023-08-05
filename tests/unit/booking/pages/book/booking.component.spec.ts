import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingComponent} from '../../../../../src/app/booking/pages/book/booking.component';
import {SBookingComponent} from '../../../../../src/app/booking/components/s-booking/s-booking.component';
import {AppComponent} from '../../../../../src/app/app.component';
import {AppModule} from '../../../../../src/app/app.module';

describe('BookingComponent', () => {
    let component: BookingComponent;
    let fixture: ComponentFixture<BookingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BookingComponent, SBookingComponent],
            providers: [],
            imports: [
                AppModule,
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Client');
    });
});
