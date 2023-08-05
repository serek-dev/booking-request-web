import {map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {BookingRepository} from './booking.repository';
import {BookingApi} from '../../shared/api/mock/booking.api';
import {Booking} from '../booking.model';

@Injectable()
export class BookingApiRepository implements BookingRepository {

    constructor(private readonly api: BookingApi) {
    }

    store(booking: Booking): Observable<string> {
        return this.api.store({
            customerEmail: booking.customer.email,
            customerFirstName: booking.customer.firstName,
            customerLastName: booking.customer.lastName,
            customerPhoneNumber: parseInt(booking.customer.phoneNumber),
            availabilityId: booking.availability.id,
            availabilityRangeFrom: booking.availability.period.from,
            availabilityRangeTo: booking.availability.period.to,
            specialistId: booking.expert.id,
            specialistName: booking.expert.name,
        }).pipe(
            map((res) => res.body['id']) // todo: adjust it to response
        )
    }
}
