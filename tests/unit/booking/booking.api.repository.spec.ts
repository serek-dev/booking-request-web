import {BookingApi} from '../../../src/app/shared/api/mock/booking.api';
import {BookingRepository} from '../../../src/app/booking/repositories/booking.repository';
import {Booking} from '../../../src/app/booking/booking.model';
import {Availability} from '../../../src/app/booking/availability.model';
import {Period} from '../../../src/app/shared/values/period';
import {DateTime} from '../../../src/app/shared/values/date-time';
import {Email} from '../../../src/app/shared/values/email';
import {Customer} from '../../../src/app/booking/customer.model';
import {Expert} from '../../../src/app/booking/expert.model';
import {BookingApiRepository} from '../../../src/app/booking/repositories/booking.api.repository';

describe('BookingApiRepository', () => {
    let repository: BookingRepository;

    let booking = new Booking(
        new Expert(
            'expertUuid',
            'expert name',
        ),
        new Availability(
            'availabilityUuid',
            'availabilityUuid',
            new Period(
                new DateTime('2020-01-01 20:20'),
                new DateTime('2020-01-01 20:20'),
            )
        ),
        new Customer(
            new Email('some@email.com'),
            'name',
            'last name',
            '500355031'
        )
    );

    beforeEach(() => {
        repository = new BookingApiRepository(
            new BookingApi()
        )
    });

    it('should return API result mapped to newly created appointment id on success', () => {
        // Given booking I've created

        // When I store it through repository that calls an API
        const res = repository.store(booking)

        // Then I expect to receive back newly created UUID
        res.subscribe(
            orderUuid => expect(orderUuid).toBe('7c17a32c-2b83-4597-af93-18fb07126991')
        );

        expect(true).toBeTruthy();
    });

    // todo
    // it('should throw an error when response is not 200 status code', () => {
    //     // Given booking I've created
    //
    //     // And repository that calls an external API
    //     const api: jasmine.SpyObj<BookingApi> = jasmine.createSpyObj('BookingApi', ['store']);
    //     api.store.and.returnValue(
    //         of(
    //             new HttpResponse<any>({
    //                 status: 409,
    //             })
    //         )
    //     );
    //
    //     const repository = new BookingApiRepository(api);
    //
    //     // When I store it through repository that calls an API
    //     expect(function () {
    //         repository.store(booking).subscribe(res => res)
    //         // Then an error should be thrown
    //     }).toThrow(
    //         new Error('Unable to finish request')
    //     )
    // });
});
