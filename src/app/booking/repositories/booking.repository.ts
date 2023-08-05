import {Observable} from 'rxjs';
import {Availability} from '../availability.model';
import {Booking} from '../booking.model';

export interface BookingRepository {
    /** should return newly created order id */
    store(booking: Booking): Observable<string>;
}
